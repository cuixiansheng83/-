#!/bin/bash
# flip6-autoconnect.sh
# 登录后自动连接 JBL Flip 6 并设为默认声音输出；
# 找不到设备或连不上时，切回 Mac mini 自带扬声器。
# 依赖：blueutil、switchaudio-osx（brew install blueutil switchaudio-osx）
# 兼容 macOS 自带的 bash 3.2。

# ---- 配置：可用环境变量或 ~/.config/flip6-autoconnect.conf 覆盖 ----
: "${DEVICE_NAME:=Flip 6}"      # 蓝牙名称里包含的关键字，不区分大小写
: "${FALLBACK_OUTPUT:=}"        # 留空则自动查找 Mac mini 自带扬声器
: "${CONNECT_TIMEOUT:=60}"      # 最多等多少秒让蓝牙连上
: "${POLL_INTERVAL:=3}"         # 连接失败后的重试间隔（秒）
: "${AUDIO_WAIT:=20}"           # 连上后等音频设备出现的最长时间（秒）
: "${BT_READY_TIMEOUT:=20}"     # 刚登录时等蓝牙就绪的最长时间（秒）
: "${NOTIFY:=1}"                # 1 = 完成后弹出系统通知
CONFIG_FILE="${FLIP6_CONFIG:-$HOME/.config/flip6-autoconnect.conf}"
[ -f "$CONFIG_FILE" ] && . "$CONFIG_FILE"

# launchd 的 PATH 很短，补上 Homebrew 的目录（Apple 芯片 / Intel）
export PATH="$PATH:/opt/homebrew/bin:/usr/local/bin"

log() { echo "$(date '+%F %T') $*"; }

notify() {
  [ "$NOTIFY" = "1" ] || return 0
  osascript -e "display notification \"$1\" with title \"Flip 6 自动连接\"" >/dev/null 2>&1 || true
}

# 给可能卡住的命令加超时：run_with_timeout 秒数 命令...
run_with_timeout() {
  local secs="$1"; shift
  "$@" &
  local pid=$!
  ( sleep "$secs"; kill "$pid" 2>/dev/null ) &
  local watcher=$!
  wait "$pid" 2>/dev/null
  local rc=$?
  kill "$watcher" 2>/dev/null
  return $rc
}

# 当前所有声音输出设备的名字（去掉可能带的 " (output)" 后缀）
list_outputs() {
  SwitchAudioSource -a -t output 2>/dev/null | sed -E 's/ \((input|output|system|all)\)$//'
}

# 在“已配对”的设备里找名字含 DEVICE_NAME 的，成功则输出它的蓝牙地址
# 返回值：0 找到 / 1 已配对列表里没有 / 2 列表为空（蓝牙可能还没就绪）
find_device() {
  local paired addr pat
  paired="$(blueutil --paired 2>/dev/null)"
  [ -n "$paired" ] || return 2
  pat="$(printf '%s' "$DEVICE_NAME" | tr '[:upper:]' '[:lower:]')"
  # 每行形如：address: aa-bb-cc-dd-ee-ff, not connected, ..., name: "JBL Flip 6", ...
  addr="$(printf '%s\n' "$paired" | awk -v pat="$pat" '
    {
      low = tolower($0)
      i = index(low, "name: \"")
      if (i == 0) next
      if (index(substr(low, i), pat) == 0) next
      split($0, f, ",")
      sub(/^address: */, "", f[1])
      print f[1]
      exit
    }')"
  [ -n "$addr" ] || return 1
  echo "$addr"
}

is_connected() {
  [ "$(blueutil --is-connected "$1" 2>/dev/null)" = "1" ]
}

# 反复尝试连接，直到成功或超过 CONNECT_TIMEOUT
connect_device() {
  local addr="$1" deadline=$((SECONDS + CONNECT_TIMEOUT))
  while :; do
    is_connected "$addr" && return 0
    [ "$SECONDS" -lt "$deadline" ] || return 1
    log "正在连接 $addr ..."
    run_with_timeout 15 blueutil --connect "$addr" >/dev/null 2>&1
    is_connected "$addr" && return 0
    sleep "$POLL_INTERVAL"
  done
}

# 等音箱的音频输出设备出现，输出它在系统里的准确名字
wait_for_audio() {
  local deadline=$((SECONDS + AUDIO_WAIT)) name
  while :; do
    name="$(list_outputs | grep -i -F -- "$DEVICE_NAME" | head -n1)"
    if [ -n "$name" ]; then echo "$name"; return 0; fi
    [ "$SECONDS" -lt "$deadline" ] || return 1
    sleep 1
  done
}

# 把声音输出（和系统提示音）切到指定设备
set_output() {
  local name="$1"
  SwitchAudioSource -t output -s "$name" >/dev/null 2>&1 || return 1
  SwitchAudioSource -t system -s "$name" >/dev/null 2>&1
  SwitchAudioSource -c -t output 2>/dev/null | grep -q -F -- "$name"
}

# 切回 Mac mini 自带扬声器
use_fallback() {
  local reason="$1" target="$FALLBACK_OUTPUT"
  log "$reason，切回自带扬声器"
  if [ -z "$target" ]; then
    target="$(list_outputs | grep -i 'mac mini' | head -n1)"
  fi
  if [ -z "$target" ]; then
    target="$(list_outputs | grep -i -E '扬声器|speakers' | grep -i -v -F -- "$DEVICE_NAME" | head -n1)"
  fi
  if [ -z "$target" ]; then
    log "没有找到自带扬声器，请在配置里设置 FALLBACK_OUTPUT"
    notify "$reason，但没找到自带扬声器"
    return 1
  fi
  if set_output "$target"; then
    log "已切换到：$target"
    notify "$reason，已切回 $target"
  else
    log "切换到 $target 失败"
    return 1
  fi
}

main() {
  command -v blueutil >/dev/null 2>&1 || { log "未找到 blueutil，请先运行 install.sh"; exit 1; }
  command -v SwitchAudioSource >/dev/null 2>&1 || { log "未找到 SwitchAudioSource，请先运行 install.sh"; exit 1; }

  log "=== 开始：目标设备 \"$DEVICE_NAME\" ==="

  if [ "$(blueutil --power 2>/dev/null)" != "1" ]; then
    log "蓝牙未开启，正在开启"
    blueutil --power 1
    sleep 3
  fi

  local addr rc waited=0
  while :; do
    addr="$(find_device)"; rc=$?
    if [ "$rc" -ne 2 ] || [ "$waited" -ge "$BT_READY_TIMEOUT" ]; then break; fi
    sleep 2
    waited=$((waited + 2))
  done
  if [ "$rc" -ne 0 ]; then
    use_fallback "没有找到已配对的 $DEVICE_NAME"
    exit 0
  fi
  log "找到设备：$addr"

  if connect_device "$addr"; then
    local name
    name="$(wait_for_audio)"
    if [ -n "$name" ] && set_output "$name"; then
      log "已连接，并设为默认输出：$name"
      notify "已连接 $name，并设为默认音箱"
      exit 0
    fi
    use_fallback "蓝牙已连接，但没有出现 $DEVICE_NAME 的音频输出"
  else
    use_fallback "$DEVICE_NAME 连接超时（可能没开机或距离太远）"
  fi
  exit 0
}

main
