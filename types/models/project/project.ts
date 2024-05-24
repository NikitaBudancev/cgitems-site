import type { ProjectStage } from '../stage';

export interface Project {
  id: number;
  name: string;
  slug: string;
  projectDescription: string;
  createdAt: string;
  currentStageId: number;
  projectType: object;
  stages?: ProjectStage[];
  stage?: ProjectStage;
  course: object;
  review: string;
  reviewDate: string;
}
