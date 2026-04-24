import type { Feedback, InteractionId, QualityCase, StageId } from '../types';
import { ACTION_LABELS, FLOW_STEPS, QUALITY_CASES, RISK_POINTS, STAGES, TEACHING_TIPS } from '../data/training';

interface TrainingPanelProps {
  stage: StageId;
  score: number;
  feedback: Feedback;
  riskFound: InteractionId[];
  flowIndex: number;
  qualityCase: QualityCase;
  qualityIndex: number;
  canAdvance: boolean;
  preferVR: boolean;
  onSubmitRisk: () => void;
  onNextStage: () => void;
  onFinish: () => void;
  onSpeak: () => void;
}

function StageSpecificPanel({
  stage,
  riskFound,
  flowIndex,
  qualityCase,
  qualityIndex,
}: Pick<TrainingPanelProps, 'stage' | 'riskFound' | 'flowIndex' | 'qualityCase' | 'qualityIndex'>) {
  if (stage === 1) {
    return (
      <div className="task-list">
        {RISK_POINTS.map((point) => (
          <span className={riskFound.includes(point.id) ? 'done' : ''} key={point.id}>
            {riskFound.includes(point.id) ? '✓' : '○'} {point.label}
          </span>
        ))}
      </div>
    );
  }

  if (stage === 2) {
    return (
      <div className="task-list">
        <span>○ 过细刷</span>
        <span>○ 合适刷</span>
        <span>○ 过粗刷</span>
      </div>
    );
  }

  if (stage === 3) {
    return (
      <div className="step-track">
        {FLOW_STEPS.map((step, index) => (
          <span className={index < flowIndex ? 'done' : index === flowIndex ? 'current' : ''} key={step.id}>
            {index + 1}. {step.label}
          </span>
        ))}
      </div>
    );
  }

  if (stage === 4) {
    return (
      <div className="task-list">
        <span>○ 自然放置不处理</span>
        <span>○ 外表擦干</span>
        <span>○ 管腔内外充分干燥</span>
      </div>
    );
  }

  return (
    <div className="quality-copy">
      <strong>
        状态 {qualityIndex + 1}/{QUALITY_CASES.length}：{qualityCase.title}
      </strong>
      <p>{qualityCase.detail}</p>
      <div className="task-list">
        <span>○ {ACTION_LABELS['quality-reclean']}</span>
        <span>○ {ACTION_LABELS['quality-package']}</span>
        <span>○ {ACTION_LABELS['quality-report']}</span>
      </div>
    </div>
  );
}

export default function TrainingPanel({
  stage,
  score,
  feedback,
  riskFound,
  flowIndex,
  qualityCase,
  qualityIndex,
  canAdvance,
  preferVR,
  onSubmitRisk,
  onNextStage,
  onFinish,
  onSpeak,
}: TrainingPanelProps) {
  const info = STAGES[stage];
  const remaining =
    stage === 1
      ? `${riskFound.length}/4`
      : stage === 3
        ? `${flowIndex}/${FLOW_STEPS.length}`
        : stage === 5
          ? `${qualityIndex + 1}/${QUALITY_CASES.length}`
          : canAdvance
            ? '已完成'
            : '待完成';

  return (
    <aside className="training-panel" aria-label="任务提示与评分">
      <div className="panel-topline">
        <span>第{stage}关</span>
        <strong>{score}分</strong>
      </div>
      <h2>{info.title}</h2>
      <p className="task-copy">{info.task}</p>
      {preferVR && (
        <p className="vr-hint">VR模式：请点击3D场景右下角的 ENTER VR 按钮，Quest 浏览器会自动进入沉浸式视图。</p>
      )}
      <StageSpecificPanel
        stage={stage}
        riskFound={riskFound}
        flowIndex={flowIndex}
        qualityCase={qualityCase}
        qualityIndex={qualityIndex}
      />

      <div className={`feedback ${feedback.tone}`} aria-live="polite">
        <span>语音文字提示</span>
        <p>{feedback.message}</p>
        <button className="ghost" type="button" onClick={onSpeak}>
          朗读提示
        </button>
      </div>

      <div className="teaching-tip">
        <span>教学提示</span>
        <p>{TEACHING_TIPS[stage - 1]}</p>
      </div>

      <div className="panel-footer">
        <span>剩余步骤：{remaining}</span>
        {stage === 1 ? (
          <button className="primary compact" type="button" onClick={onSubmitRisk}>
            提交识别
          </button>
        ) : stage === 5 && canAdvance ? (
          <button className="primary compact" type="button" onClick={onFinish}>
            完成训练
          </button>
        ) : (
          <button className="primary compact" type="button" disabled={!canAdvance} onClick={onNextStage}>
            进入下一关
          </button>
        )}
      </div>
    </aside>
  );
}
