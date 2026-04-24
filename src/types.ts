export type StageId = 1 | 2 | 3 | 4 | 5;

export type ScoreCategory = 'risk' | 'brush' | 'flow' | 'dry' | 'quality';

export type FeedbackTone = 'neutral' | 'success' | 'error' | 'warning';

export type InteractionId =
  | 'risk-lumen'
  | 'risk-joint'
  | 'risk-protein'
  | 'risk-aerosol'
  | 'brush-thin'
  | 'brush-fit'
  | 'brush-thick'
  | 'step-pre-rinse'
  | 'step-enzyme'
  | 'step-brush'
  | 'step-rinse'
  | 'step-low-rinse'
  | 'step-final-rinse'
  | 'hazard-high-pressure'
  | 'dry-none'
  | 'dry-surface'
  | 'dry-full'
  | 'quality-reclean'
  | 'quality-package'
  | 'quality-report';

export interface Feedback {
  tone: FeedbackTone;
  message: string;
}

export interface StageInfo {
  id: StageId;
  title: string;
  score: number;
  task: string;
}

export interface QualityCase {
  id: 'obvious' | 'hidden' | 'clean';
  title: string;
  detail: string;
  hasResidue: boolean;
  correctAction: InteractionId;
}

export interface ErrorRecord {
  category: ScoreCategory;
  points: number;
  message: string;
}
