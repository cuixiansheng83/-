#!/bin/bash
# 安装：装依赖 -> 复制脚本 -> 生成可双击的“连接Flip6”应用 -> 设为登录后自动运行
set -e

if [ "$(uname)" != "Darwin" ]; then
  echo "这个工具只能安装在 Mac 上。"
  exit 1
fi

HERE="$(cd "$(dirname "$0")" && pwd)"
LABEL="com.user.flip6-autoconnect"
APP_ID="$LABEL.app"
DEST_DIR="$HOME/.local/share/flip6-autoconnect"
DEST="$DEST_DIR/flip6-autoconnect.sh"
APP_DIR="$HOME/Applications"
APP="$APP_DIR/连接Flip6.app"
PLIST="$HOME/Library/LaunchAgents/$LABEL.plist"
LOG="$HOME/Library/Logs/flip6-autoconnect.log"
PLISTBUDDY="${PLISTBUDDY:-/usr/libexec/PlistBuddy}"

# 1. Homebrew
BREW="$(command -v brew || true)"
if [ -z "$BREW" ]; then
  for p in /opt/homebrew/bin/brew /usr/local/bin/brew; do
    if [ -x "$p" ]; then BREW="$p"; break; fi
  done
fi
if [ -z "$BREW" ]; then
  echo "没有找到 Homebrew。请先到 https://brew.sh 按首页的那一行命令安装，装完再运行本脚本。"
  exit 1
fi

# 2. 依赖
for pkg in blueutil switchaudio-osx; do
  if ! "$BREW" list --formula "$pkg" >/dev/null 2>&1; then
    echo "正在安装 $pkg ..."
    "$BREW" install "$pkg"
  fi
done

# 3. 复制脚本
mkdir -p "$DEST_DIR" "$(dirname "$PLIST")" "$(dirname "$LOG")"
cp "$HERE/flip6-autoconnect.sh" "$DEST"
chmod +x "$DEST"

# 4. 生成可双击的应用（真正的 .app，蓝牙权限提示会显示它的名字）
plist_set() { # 文件 键 类型 值
  "$PLISTBUDDY" -c "Set :$2 $4" "$1" >/dev/null 2>&1 || "$PLISTBUDDY" -c "Add :$2 $3 $4" "$1"
}

build_app() {
  local tmp src info
  tmp="$(mktemp -d)"
  src="$tmp/launcher.applescript"
  cat > "$src" <<EOF
-- 运行自动连接脚本（登录时和双击图标时都会执行）
on run
	with timeout of 600 seconds
		try
			do shell script "/bin/bash " & quoted form of "$DEST" & " >> " & quoted form of "$LOG" & " 2>&1"
		on error errMsg
			display notification errMsg with title "连接Flip6"
		end try
	end timeout
end run
EOF
  mkdir -p "$APP_DIR"
  rm -rf "$APP"
  osacompile -o "$APP" "$src" || return 1
  info="$APP/Contents/Info.plist"
  plist_set "$info" LSUIElement bool true || return 1
  plist_set "$info" CFBundleIdentifier string "$APP_ID" || return 1
  plist_set "$info" NSBluetoothAlwaysUsageDescription string "自动连接JBL-Flip6蓝牙音箱" || return 1
  codesign --force --deep --sign - "$APP" >/dev/null 2>&1 || return 1
  rm -rf "$tmp"
}

if build_app; then
  APP_OK=1
  echo "已生成应用：$APP"
else
  APP_OK=0
  echo "生成应用失败，改为登录时直接运行脚本（功能不受影响，只是没有可双击的图标）。"
fi

# 5. 登录后自动运行
if [ "$APP_OK" = 1 ]; then
  # 登录时用 open 打开应用；刚登录时系统可能还没准备好，最多重试 6 次
  PROGRAM_ARGS="    <string>/bin/bash</string>
    <string>-c</string>
    <string>for i in 1 2 3 4 5 6; do if /usr/bin/open -g \"\$1\"; then exit 0; fi; /bin/sleep 5; done; exit 1</string>
    <string>flip6</string>
    <string>$APP</string>"
else
  PROGRAM_ARGS="    <string>/bin/bash</string>
    <string>$DEST</string>"
fi

cat > "$PLIST" <<EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>$LABEL</string>
  <key>ProgramArguments</key>
  <array>
$PROGRAM_ARGS
  </array>
  <key>RunAtLoad</key>
  <true/>
  <key>StandardOutPath</key>
  <string>$LOG</string>
  <key>StandardErrorPath</key>
  <string>$LOG</string>
</dict>
</plist>
EOF

launchctl bootout "gui/$(id -u)/$LABEL" >/dev/null 2>&1 || true
launchctl bootstrap "gui/$(id -u)" "$PLIST"

cat <<EOF

安装完成，已经在后台试运行一次。
  · 第一次运行时 macOS 会弹出“蓝牙权限”提示，请点“允许”。
  · 以后每次登录会自动运行；想随时手动连接，双击「应用程序」里的“连接Flip6”
    （位置：$APP，也可以拖到程序坞）。
  · 查看结果：cat "$LOG"
  · 卸载：    bash "$HERE/uninstall.sh"
EOF
