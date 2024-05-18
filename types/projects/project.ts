interface Project {
  id: 42;
  name: string;
  slug: string;
  projectDescription: string;
  createdAt: string;
  currentStageId: number;
  projectType: object;
  stages: Array<ProjectStage>;
  course: object;
  review: string;
  reviewDate: string;
}
