interface HomeScreenProps {
  onStart: () => void;
  onStartVr: () => void;
}

export default function HomeScreen({ onStart, onStartVr }: HomeScreenProps) {
  return (
    <main className="home-screen">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow">CSSD 去污区沉浸式教学原型</p>
          <h1 id="home-title">CSSD管腔器械清洗VR训练系统</h1>
          <p className="subtitle">看见隐蔽污染，练会规范清洗</p>
          <div className="home-actions" aria-label="训练入口">
            <button className="primary" type="button" onClick={onStart}>
              开始训练
            </button>
            <a className="secondary" href="#instructions">
              查看操作说明
            </a>
            <button className="secondary" type="button" onClick={onStartVr}>
              进入VR模式
            </button>
          </div>
        </div>
        <div className="hero-scene" aria-hidden="true">
          <div className="sink-illustration">
            <span className="tube tube-main" />
            <span className="tube tube-shadow" />
            <span className="residue-dot dot-a" />
            <span className="residue-dot dot-b" />
            <span className="residue-dot dot-c" />
            <span className="brush-preview" />
            <span className="water-line line-a" />
            <span className="water-line line-b" />
          </div>
        </div>
      </section>

      <section id="instructions" className="instructions">
        <h2>操作说明</h2>
        <div className="instruction-grid">
          <article>
            <h3>电脑浏览器</h3>
            <p>拖拽旋转视角，滚轮缩放，点击高亮物体完成选择。</p>
          </article>
          <article>
            <h3>手机浏览器</h3>
            <p>单指点击交互目标，双指缩放，横屏展示空间更宽。</p>
          </article>
          <article>
            <h3>Meta Quest 3S</h3>
            <p>使用 Quest 浏览器打开部署地址，点击场景内 WebXR 按钮进入 VR，可用控制器或凝视选择。</p>
          </article>
        </div>
      </section>
    </main>
  );
}
