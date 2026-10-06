#!/bin/bash
# 安装：装依赖 -> 复制脚本 -> 注册为“登录后自动运行”（LaunchAgent）
set -e

if [ "$(uname)" != "Darwin" ]; then
  echo "这个工具只能安装在 Mac 上。"
  exit 1
fi

HERE="$(cd "$(dirname "$0")" && pwd)"
LABEL="com.user.flip6-autoconnect"
DEST_DIR="$HOME/.local/share/flip6-autoconnect"
DEST="$DEST_DIR/flip6-autoconnect.sh"
PLIST="$HOME/Library/LaunchAgents/$LABEL.plist"
LOG="$HOME/Library/Logs/flip6-autoconnect.log"

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

# 4. 登录后自动运行
cat > "$PLIST" <<EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>$LABEL</string>
  <key>ProgramArguments</key>
  <array>
    <string>/bin/bash</string>
    <string>$DEST</string>
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
  查看结果：cat "$LOG"
  手动运行：bash "$DEST"
  卸载：    bash "$HERE/uninstall.sh"

提示：第一次运行时 macOS 可能弹出“蓝牙权限”提示，请点“允许”。
EOF
