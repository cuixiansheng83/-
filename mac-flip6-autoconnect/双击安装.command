#!/bin/bash
# 在访达里双击本文件即可安装（第一次可能需要：右键 -> 打开）
cd "$(dirname "$0")" || exit 1
bash ./install.sh
status=$?
echo
read -r -p "按回车键关闭此窗口……" _
exit $status
