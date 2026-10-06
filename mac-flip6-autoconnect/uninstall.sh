#!/bin/bash
# 卸载：取消自动运行并删除脚本
LABEL="com.user.flip6-autoconnect"
PLIST="$HOME/Library/LaunchAgents/$LABEL.plist"

launchctl bootout "gui/$(id -u)/$LABEL" >/dev/null 2>&1 || true
rm -f "$PLIST"
rm -rf "$HOME/.local/share/flip6-autoconnect"

echo "已卸载。日志文件 ~/Library/Logs/flip6-autoconnect.log 保留，可手动删除。"
echo "依赖 blueutil、switchaudio-osx 没有删除；不需要的话可运行：brew uninstall blueutil switchaudio-osx"
