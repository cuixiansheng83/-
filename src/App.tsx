import { useEffect, useMemo, useState } from 'react';
import CSSDScene from './components/CSSDScene';
import EndScreen from './components/EndScreen';
import HomeScreen from './components/HomeScreen';
import TrainingPanel from './components/TrainingPanel';
import { FLOW_STEPS, QUALITY_CASES, RISK_POINTS, SCORE_MAX } from './data/training';
import type { ErrorRecord, Feedback, InteractionId, ScoreCategory, StageId } from './types';

const initialScores: Record<ScoreCategory, number> = { ...SCORE_MAX };
const initialFeedback: Feedback = {
  tone: 'neutral',
  message: '请根据当前任务，在三维场景中点击高亮物体。VR模式可使用控制器或凝视停留选择。',
};

function totalScore(scores: Record<ScoreCategory, number>) {
  return Object.values(scores).reduce((sum, value) => sum + value, 0);
}

function App() {
  const [screen, setScreen] = useState<'home' | 'training' | 'end'>('home');
  const [preferVR, setPreferVR] = useState(false);
  const [stage, setStage] = useState<StageId>(1);
  const [categoryScores, setCategoryScores] = useState<Record<ScoreCategory, number>>({ ...initialScores });
  const [errorRecords, setErrorRecords] = useState<ErrorRecord[]>([]);
  const [deductedKeys, setDeductedKeys] = useState<Set<string>>(new Set());
  const [feedback, setFeedback] = useState<Feedback>(initialFeedback);
  const [riskFound, setRiskFound] = useState<InteractionId[]>([]);
  const [brushComplete, setBrushComplete] = useState(false);
  const [flowIndex, setFlowIndex] = useState(0);
  const [flowComplete, setFlowComplete] = useState(false);
  const [dryComplete, setDryComplete] = useState(false);
  const [qualityIndex, setQualityIndex] = useState(0);
  const [qualityComplete, setQualityComplete] = useState(false);
  const [selectedIds, setSelectedIds] = useState<InteractionId[]>([]);
  const [aerosolSignal, setAerosolSignal] = useState(0);

  const score = useMemo(() => totalScore(categoryScores), [categoryScores]);
  const qualityCase = QUALITY_CASES[qualityIndex];
  const canAdvance =
    (stage === 2 && brushComplete) ||
    (stage === 3 && flowComplete) ||
    (stage === 4 && dryComplete) ||
    (stage === 5 && qualityComplete);

  useEffect(() => {
    const listener = (event: Event) => {
      handleInteraction((event as CustomEvent<InteractionId>).detail);
    };
    window.addEventListener('cssd-gaze-interaction', listener);
    return () => window.removeEventListener('cssd-gaze-interaction', listener);
  });

  const resetTraining = (vr = false) => {
    setPreferVR(vr);
    setStage(1);
    setCategoryScores({ ...initialScores });
    setErrorRecords([]);
    setDeductedKeys(new Set());
    setFeedback(initialFeedback);
    setRiskFound([]);
    setBrushComplete(false);
    setFlowIndex(0);
    setFlowComplete(false);
    setDryComplete(false);
    setQualityIndex(0);
    setQualityComplete(false);
    setSelectedIds([]);
    setAerosolSignal(0);
    setScreen('training');
  };

  const deduct = (key: string, category: ScoreCategory, points: number, message: string) => {
    setDeductedKeys((previous) => {
      if (previous.has(key)) return previous;
      setCategoryScores((scores) => ({
        ...scores,
        [category]: Math.max(0, scores[category] - points),
      }));
      setErrorRecords((records) => [...records, { category, points, message }]);
      const next = new Set(previous);
      next.add(key);
      return next;
    });
  };

  const handleInteraction = (id: InteractionId) => {
    if (stage === 1) handleRiskInteraction(id);
    if (stage === 2) handleBrushInteraction(id);
    if (stage === 3) handleFlowInteraction(id);
    if (stage === 4) handleDryInteraction(id);
    if (stage === 5) handleQualityInteraction(id);
  };

  const handleRiskInteraction = (id: InteractionId) => {
    if (!id.startsWith('risk-')) return;
    const point = RISK_POINTS.find((item) => item.id === id);
    if (!point) return;
    setRiskFound((previous) => (previous.includes(id) ? previous : [...previous, id]));
    setSelectedIds((previous) => (previous.includes(id) ? previous : [...previous, id]));
    setFeedback({
      tone: 'success',
      message:
        id === 'risk-lumen'
          ? '已识别管腔内部不可见污染。管腔器械的风险不只在表面，真正的清洗难点在管腔内部和连接部位。'
          : point.tip,
    });
  };

  const submitRisk = () => {
    const found = new Set(riskFound);
    const missed = RISK_POINTS.filter((point) => !found.has(point.id));
    if (missed.length === 0) {
      setFeedback({
        tone: 'success',
        message: '管腔器械的风险不只在表面，真正的清洗难点在管腔内部和连接部位。',
      });
    } else {
      missed.forEach((point) => {
        const points = point.id === 'risk-lumen' ? 10 : 5;
        deduct(`risk-missed-${point.id}`, 'risk', points, `未识别：${point.label}`);
      });
      setFeedback({
        tone: 'warning',
        message: `仍有${missed.length}个风险点未识别。进入下一关前请记住：隐蔽污染和连接部位是管腔清洗重点。`,
      });
    }
    goToStage(2);
  };

  const handleBrushInteraction = (id: InteractionId) => {
    if (!['brush-thin', 'brush-fit', 'brush-thick'].includes(id)) return;
    setSelectedIds([id]);
    if (id === 'brush-fit') {
      setBrushComplete(true);
      setFeedback({ tone: 'success', message: '刷子规格匹配，可有效接触管腔内壁。' });
      return;
    }
    if (id === 'brush-thin') {
      deduct('brush-wrong', 'brush', 10, '选择刷子错误：过细刷毛无法有效接触管腔内壁。');
      setFeedback({ tone: 'error', message: '刷毛无法有效接触管腔内壁，可能造成残留。' });
      return;
    }
    deduct('brush-wrong', 'brush', 10, '选择刷子错误：过粗刷可能损伤器械管腔。');
    setFeedback({ tone: 'error', message: '可能损伤器械管腔，不能强行通过。' });
  };

  const handleFlowInteraction = (id: InteractionId) => {
    if (id === 'hazard-high-pressure') {
      deduct('flow-aerosol', 'flow', 15, '高压直冲导致气溶胶扩散。');
      setAerosolSignal((value) => value + 1);
      setFeedback({
        tone: 'error',
        message:
          '高压直冲可能形成飞溅和气溶胶，增加生物暴露风险。应控制压力和方向，必要时采用低位或液面下冲洗。',
      });
      return;
    }

    const expected = FLOW_STEPS[flowIndex];
    if (!expected || id !== expected.id) {
      setFeedback({
        tone: 'error',
        message: `步骤顺序不正确。当前应先完成：${expected ? expected.label : '全部步骤已完成'}。`,
      });
      return;
    }

    const nextIndex = flowIndex + 1;
    setSelectedIds(FLOW_STEPS.slice(0, nextIndex).map((step) => step.id));
    setFlowIndex(nextIndex);
    if (nextIndex === FLOW_STEPS.length) {
      setFlowComplete(true);
      setFeedback({
        tone: 'success',
        message: '已按规范完成刷洗与冲洗流程，并通过低位或液面下冲洗降低飞溅风险。',
      });
      return;
    }
    setFeedback({ tone: 'success', message: `已完成${expected.label}，请继续下一步：${FLOW_STEPS[nextIndex].label}。` });
  };

  const handleDryInteraction = (id: InteractionId) => {
    if (!['dry-none', 'dry-surface', 'dry-full'].includes(id)) return;
    setSelectedIds([id]);
    if (id === 'dry-full') {
      setDryComplete(true);
      setFeedback({ tone: 'success', message: '已完成管腔内外充分干燥，可减少残留水分对后续检查、包装和灭菌质量的影响。' });
      return;
    }
    deduct('dry-wrong', 'dry', 10, '未进行管腔内外充分干燥。');
    setFeedback({ tone: 'error', message: '管腔内残留水分会影响后续检查、包装和灭菌质量。' });
  };

  const handleQualityInteraction = (id: InteractionId) => {
    if (!['quality-reclean', 'quality-package', 'quality-report'].includes(id)) return;
    setSelectedIds([id]);

    if (qualityCase.hasResidue && id === 'quality-package') {
      deduct(`quality-missed-${qualityCase.id}`, 'quality', 20, `残留未发现却判定合格：${qualityCase.title}。`);
      setFeedback({
        tone: 'error',
        message: '管腔内仍有残留，不能进入包装灭菌环节，应重新清洗。',
      });
      return;
    }

    if (id !== qualityCase.correctAction) {
      setFeedback({
        tone: 'warning',
        message: qualityCase.hasResidue ? '该状态仍有残留，规范处置是重新清洗。' : '该状态已清洗合格，可进入检查包装。',
      });
      return;
    }

    if (qualityIndex < QUALITY_CASES.length - 1) {
      setFeedback({
        tone: 'success',
        message: `${qualityCase.title}判断正确。请观察下一种管腔状态。`,
      });
      setQualityIndex((index) => index + 1);
      setSelectedIds([]);
      return;
    }

    setQualityComplete(true);
    setFeedback({ tone: 'success', message: '三种质量状态均已完成判断，训练闭环结束。' });
  };

  const goToStage = (next: StageId) => {
    setStage(next);
    setSelectedIds([]);
    if (next === 2) {
      setBrushComplete(false);
    }
    if (next === 3) {
      setFlowIndex(0);
      setFlowComplete(false);
      setFeedback({ tone: 'neutral', message: '请按顺序完成刷洗与冲洗流程。避免点击红色高压直冲错误示范。' });
    }
    if (next === 4) {
      setDryComplete(false);
      setFeedback({ tone: 'neutral', message: '请选择能处理管腔内部水分的干燥方式。' });
    }
    if (next === 5) {
      setQualityIndex(0);
      setQualityComplete(false);
      setFeedback({ tone: 'neutral', message: '请观察放大屏，判断当前管腔状态是否合格。' });
    }
  };

  const nextStage = () => {
    if (stage < 5) {
      goToStage((stage + 1) as StageId);
    }
  };

  const finishTraining = () => {
    setScreen('end');
  };

  const speakPrompt = () => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(feedback.message);
    utterance.lang = 'zh-CN';
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  };

  if (screen === 'home') {
    return <HomeScreen onStart={() => resetTraining(false)} onStartVr={() => resetTraining(true)} />;
  }

  if (screen === 'end') {
    return <EndScreen score={score} categoryScores={categoryScores} errorRecords={errorRecords} onRestart={() => resetTraining(false)} />;
  }

  return (
    <main className="training-layout">
      <header className="training-header">
        <div>
          <span>当前关卡</span>
          <strong>
            第{stage}关 / {stage === 1 ? '风险识别' : stage === 2 ? '刷子选择' : stage === 3 ? '刷洗冲洗' : stage === 4 ? '干燥处理' : '质量判定'}
          </strong>
        </div>
        <div>
          <span>总分</span>
          <strong>{score}</strong>
        </div>
        <div>
          <span>运行模式</span>
          <strong>浏览器 + WebXR</strong>
        </div>
      </header>
      <section className="scene-shell">
        <CSSDScene
          stage={stage}
          riskFound={riskFound}
          selectedIds={selectedIds}
          flowIndex={flowIndex}
          qualityCase={qualityCase}
          aerosolSignal={aerosolSignal}
          onInteract={handleInteraction}
        />
      </section>
      <TrainingPanel
        stage={stage}
        score={score}
        feedback={feedback}
        riskFound={riskFound}
        flowIndex={flowIndex}
        qualityCase={qualityCase}
        qualityIndex={qualityIndex}
        canAdvance={canAdvance}
        preferVR={preferVR}
        onSubmitRisk={submitRisk}
        onNextStage={nextStage}
        onFinish={finishTraining}
        onSpeak={speakPrompt}
      />
    </main>
  );
}

export default App;
