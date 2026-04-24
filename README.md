# CSSD管腔器械清洗VR训练系统

这是一个可独立运行的网页端 VR 互动训练原型，用于消毒供应中心（CSSD）管腔器械清洗教学、课堂演示和竞赛展示。项目使用 Vite、React、TypeScript、Three.js 与 WebXR，不依赖后端，不调用付费 API，可部署到 GitHub Pages 或任意静态网页服务器。

## 教学价值

- 将不可见的管腔内部污染、蛋白残留和接口部位残留可视化。
- 将传统流程演示转化为可点击、可凝视、可进入 VR 的沉浸式操作。
- 对刷子选择、高压直冲、干燥不足和质量误判等错误进行即时反馈。
- 将清洗质量判断与飞溅、气溶胶等职业暴露风险同时纳入训练。
- 支持学生反复训练，也适合教师在课堂或竞赛展示中快速演示。

## 功能概览

训练包含 5 个关卡：

1. 识别管腔污染风险：管腔内部不可见污染、接口残留、蛋白残留、高压冲洗气溶胶风险。
2. 选择合适管腔刷：过细、合适、过粗三种规格对比。
3. 规范刷洗与冲洗：预冲洗、多酶清洗液、刷洗、充分冲洗、低位或液面下冲洗、终末冲洗。
4. 干燥处理：比较自然放置、外表擦干、管腔内外充分干燥。
5. 清洗质量判定：观察明显残留、隐匿残留和清洗合格三种状态，选择下一步处置。

支持交互方式：

- 电脑浏览器：鼠标点击、拖拽旋转视角、滚轮缩放。
- 手机浏览器：点击操作，触屏旋转/缩放视角。
- Meta Quest 3S：Quest 浏览器打开页面后，通过 WebXR 进入 VR，支持控制器点击和凝视停留选择。

## 本地运行

```bash
npm install
npm run dev
```

Vite 启动后会显示本地预览地址，通常是：

```text
http://localhost:5173/
```

## 打包构建

```bash
npm run build
```

构建产物会生成到 `dist/` 目录。

本地检查构建产物：

```bash
npm run preview
```

## 部署到 GitHub Pages

项目已经在 `vite.config.ts` 中设置：

```ts
base: './'
```

因此可直接作为静态站点部署。

推荐方式：直接上传源码，使用本项目自带的 GitHub Actions 自动构建并发布。

1. 将项目推送到 GitHub 仓库。
2. 在仓库 Settings -> Pages -> Build and deployment 中选择 `GitHub Actions`。
3. 推送到 `main` 分支后，`.github/workflows/deploy.yml` 会自动运行。
4. 构建完成后，GitHub Pages 会发布 `dist/` 目录。

本项目已经包含如下工作流 `.github/workflows/deploy.yml`：

```yaml
name: Deploy GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

上传到 GitHub 时建议包含这些文件和目录：

```text
.github/workflows/deploy.yml
.gitignore
README.md
index.html
package.json
tsconfig.json
tsconfig.node.json
vite.config.ts
src/
```

不要上传这些目录或系统文件：

```text
node_modules/
dist/
.DS_Store
```

说明：`node_modules/` 会由 GitHub Actions 根据 `package.json` 自动安装；`dist/` 会由 GitHub Actions 自动构建生成。

## 在 Meta Quest 3S 中打开

1. 先将项目部署到 HTTPS 地址，例如 GitHub Pages。
2. 戴上 Meta Quest 3S，打开 Quest Browser。
3. 输入部署后的网页地址。
4. 点击首页“进入VR模式”。
5. 训练页加载后，点击场景右下角的 `ENTER VR` 按钮。
6. 进入沉浸模式后，可用控制器射线点击，也可以将视线停留在目标上约 1.4 秒完成凝视选择。

WebXR 通常要求 HTTPS 环境；`localhost` 在开发机上可用于普通浏览器调试，但 Quest 设备访问时建议使用 HTTPS 部署地址。

## 后续替换 3D 模型和图片素材

当前版本使用 Three.js 基础几何体模拟清洗池、管腔器械、刷子、水枪、清洗篮筐、干燥装置、放大观察屏、污染残留和气溶胶粒子。

后续替换真实模型时，建议：

1. 将 `.glb` 或 `.gltf` 模型放入 `public/models/`。
2. 在 `src/components/CSSDScene.tsx` 中使用 `GLTFLoader` 加载模型。
3. 保留现有交互 ID，例如 `brush-fit`、`risk-lumen`、`step-low-rinse`，把它们绑定到新模型的可点击 Mesh 或透明碰撞体上。
4. 保持评分逻辑在 `src/App.tsx` 中不变，只替换三维表现层。
5. 放大观察屏目前由 Canvas 动态绘制，后续可替换为图片纹理或真实内窥镜观察截图。

## 目录结构

```text
.
├── index.html
├── package.json
├── vite.config.ts
├── src
│   ├── App.tsx
│   ├── main.tsx
│   ├── styles.css
│   ├── types.ts
│   ├── data
│   │   └── training.ts
│   └── components
│       ├── CSSDScene.tsx
│       ├── EndScreen.tsx
│       ├── HomeScreen.tsx
│       └── TrainingPanel.tsx
└── README.md
```
