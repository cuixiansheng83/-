import type { ErrorRecord, ScoreCategory } from '../types';
import { SCORE_MAX } from '../data/training';

interface EndScreenProps {
  score: number;
  categoryScores: Record<ScoreCategory, number>;
  errorRecords: ErrorRecord[];
  onRestart: () => void;
}

function getGrade(score: number) {
  if (score >= 90) {
    return {
      label: '优秀',
      message: '已掌握管腔器械清洗关键要点。',
    };
  }
  if (score >= 80) {
    return {
      label: '良好',
      message: '需继续强化质量判定。',
    };
  }
  if (score >= 60) {
    return {
      label: '合格',
      message: '需加强流程规范。',
    };
  }
  return {
    label: '需重新训练',
    message: '重点复习风险识别和规范冲洗。',
  };
}

const categoryNames: Record<ScoreCategory, string> = {
  risk: '风险识别',
  brush: '刷子选择',
  flow: '刷洗冲洗流程',
  dry: '干燥处理',
  quality: '质量判定',
};

export default function EndScreen({ score, categoryScores, errorRecords, onRestart }: EndScreenProps) {
  const grade = getGrade(score);
  const suggestions =
    errorRecords.length === 0
      ? ['保持完整流程意识，可尝试在VR模式中反复演练。']
      : [
          '复盘红色错误提示对应的操作节点。',
          '重点关注管腔内部、接口部和隐匿残留。',
          '冲洗时优先控制压力、方向和液面位置。',
        ];

  return (
    <main className="end-screen">
      <section className="result-card" aria-labelledby="result-title">
        <p className="eyebrow">训练完成</p>
        <h1 id="result-title">{score} 分</h1>
        <p className="grade">
          {grade.label}，{grade.message}
        </p>

        <div className="score-breakdown" aria-label="分类得分">
          {Object.entries(categoryScores).map(([key, value]) => {
            const category = key as ScoreCategory;
            return (
              <div className="score-row" key={category}>
                <span>{categoryNames[category]}</span>
                <strong>
                  {value}/{SCORE_MAX[category]}
                </strong>
              </div>
            );
          })}
        </div>

        <section className="error-list">
          <h2>错误记录</h2>
          {errorRecords.length === 0 ? (
            <p className="empty-errors">无扣分错误。</p>
          ) : (
            <ul>
              {errorRecords.map((record, index) => (
                <li key={`${record.message}-${index}`}>
                  <span>-{record.points}分</span>
                  {record.message}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="suggestions">
          <h2>改进建议</h2>
          <ul>
            {suggestions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <button className="primary" type="button" onClick={onRestart}>
          重新训练
        </button>
      </section>
    </main>
  );
}
