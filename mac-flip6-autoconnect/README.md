# Mac mini 自动连接 JBL Flip 6

登录 Mac 后自动连接蓝牙音箱 JBL Flip 6，并设为默认声音输出。
找不到音箱、连不上或音箱没开机时，自动切回 Mac mini 自带扬声器。

## 使用前提

1. 音箱已经在「系统设置 → 蓝牙」里**配对过一次**（脚本只连接已配对的设备，不负责首次配对）。
2. 电脑上装有 [Homebrew](https://brew.sh)（`install.sh` 会用它安装 `blueutil` 和 `switchaudio-osx`）。

## 安装

打开「终端」，进入本文件夹后运行：

```bash
bash install.sh
```

装好后会立刻试运行一次，之后每次登录都会自动运行。
Mac mini 如果没有设置自动登录，脚本会在你输入密码登录之后才运行。

查看运行结果：

```bash
cat ~/Library/Logs/flip6-autoconnect.log
```

## 工作流程

1. 蓝牙没开则先打开。
2. 在已配对设备里找名字含 `Flip 6` 的音箱。找不到则直接切回自带扬声器。
3. 找到后尝试连接，最多等 60 秒（音箱刚开机时给它时间）。
4. 连上后等系统出现该音箱的音频输出，把声音输出和系统提示音都切过去。
5. 超时、没出现音频输出等任何失败情况，都切回 Mac mini 自带扬声器，并弹出系统通知说明原因。

## 可调整的设置（可选）

新建文件 `~/.config/flip6-autoconnect.conf`，按需写入下面几行（不写则用默认值）：

```bash
DEVICE_NAME="Flip 6"        # 蓝牙名称里包含的关键字，不区分大小写
FALLBACK_OUTPUT=""          # 留空=自动找 Mac mini 自带扬声器；也可写死，如 "Mac mini扬声器"
CONNECT_TIMEOUT=60          # 最多等多少秒让蓝牙连上
NOTIFY=1                    # 1=弹出系统通知，0=不弹
```

## 常见问题

**手动在终端运行有效，但开机后没反应**
先看日志。如果提示蓝牙无权限，到「系统设置 → 隐私与安全性 → 蓝牙」，
点「+」添加 `blueutil`（在访达里按 `Cmd+Shift+G`，输入 `/opt/homebrew/bin` 或 `/usr/local/bin` 找到它），
并确保开关是打开的，然后重新登录一次。

**音箱名字不是 Flip 6**
在配置文件里把 `DEVICE_NAME` 改成蓝牙列表里显示的名称里的一段关键字。

**自带扬声器没切成功**
运行 `SwitchAudioSource -a -t output` 查看设备的准确名字，填进配置里的 `FALLBACK_OUTPUT`。

## 卸载

```bash
bash uninstall.sh
```
