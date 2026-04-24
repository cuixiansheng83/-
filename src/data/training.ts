import type { InteractionId, QualityCase, ScoreCategory, StageInfo } from '../types';

export const SCORE_MAX: Record<ScoreCategory, number> = {
  risk: 20,
  brush: 20,
  flow: 25,
  dry: 15,
  quality: 20,
};

export const STAGES: Record<number, StageInfo> = {
  1: {
    id: 1,
    title: '识别管腔污染风险',
    score: 20,
    task: '点击或凝视管腔器械上的风险热点，识别隐藏污染、连接部残留和气溶胶暴露风险。',
  },
  2: {
    id: 2,
    title: '选择合适管腔刷',
    score: 20,
    task: '从三种刷子中选择与管腔直径匹配的一种。',
  },
  3: {
    id: 3,
    title: '规范刷洗与冲洗',
    score: 25,
    task: '按规范顺序完成预冲洗、清洗液、刷洗、充分冲洗、低位或液面下冲洗、终末冲洗。',
  },
  4: {
    id: 4,
    title: '干燥处理',
    score: 15,
    task: '选择能保证管腔内外充分干燥的处理方式。',
  },
  5: {
    id: 5,
    title: '清洗质量判定',
    score: 20,
    task: '观察放大屏内管腔状态，判断是否可以进入检查包装。',
  },
};

export const RISK_POINTS: Array<{ id: InteractionId; label: string; tip: string }> = [
  {
    id: 'risk-lumen',
    label: '管腔内部不可见污染',
    tip: '管腔内部污染常被表面清洁掩盖，需要专门刷洗和冲洗。',
  },
  {
    id: 'risk-joint',
    label: '关节或接口处残留',
    tip: '连接部位容易滞留污染物，应打开、拆分或重点刷洗。',
  },
  {
    id: 'risk-protein',
    label: '管腔内壁蛋白残留',
    tip: '蛋白残留会影响后续灭菌效果，不能仅凭外观判断。',
  },
  {
    id: 'risk-aerosol',
    label: '高压冲洗气溶胶风险',
    tip: '直冲开口可能造成飞溅和气溶胶扩散，需要控制压力和方向。',
  },
];

export const FLOW_STEPS: Array<{ id: InteractionId; label: string }> = [
  { id: 'step-pre-rinse', label: '预冲洗' },
  { id: 'step-enzyme', label: '置入清洗液' },
  { id: 'step-brush', label: '刷洗管腔' },
  { id: 'step-rinse', label: '管腔充分冲洗' },
  { id: 'step-low-rinse', label: '低位/液面下冲洗' },
  { id: 'step-final-rinse', label: '终末冲洗' },
];

export const QUALITY_CASES: QualityCase[] = [
  {
    id: 'obvious',
    title: '明显残留',
    detail: '放大观察可见红棕色团块和附着颗粒。',
    hasResidue: true,
    correctAction: 'quality-reclean',
  },
  {
    id: 'hidden',
    title: '少量隐匿残留',
    detail: '管腔内壁仍有少量半透明颗粒，外表看似干净。',
    hasResidue: true,
    correctAction: 'quality-reclean',
  },
  {
    id: 'clean',
    title: '清洗合格',
    detail: '管腔内壁清洁、无可见残留，可进入下一流程。',
    hasResidue: false,
    correctAction: 'quality-package',
  },
];

export const TEACHING_TIPS = [
  '管腔器械清洗的难点在于污染残留隐蔽，不能只看表面是否干净。',
  '刷子规格应与管腔直径匹配，过细无效，过粗可能损伤器械。',
  '冲洗时应控制压力和方向，避免飞溅和气溶胶扩散。',
  '管腔器械清洗后应关注内外充分干燥。',
  '清洗质量不合格的器械不能进入包装灭菌环节。',
  '规范清洗是灭菌成功的前提，也是患者安全的前置防线。',
];

export const ACTION_LABELS: Partial<Record<InteractionId, string>> = {
  'brush-thin': '过细刷',
  'brush-fit': '合适刷',
  'brush-thick': '过粗刷',
  'step-pre-rinse': '预冲洗',
  'step-enzyme': '多酶清洗液',
  'step-brush': '合适管腔刷',
  'step-rinse': '充分冲洗',
  'step-low-rinse': '低位/液面下冲洗',
  'step-final-rinse': '终末冲洗',
  'hazard-high-pressure': '高压直冲',
  'dry-none': '自然放置',
  'dry-surface': '外表擦干',
  'dry-full': '管腔内外干燥',
  'quality-reclean': '重新清洗',
  'quality-package': '进入检查包装',
  'quality-report': '暂停并报告老师',
};
