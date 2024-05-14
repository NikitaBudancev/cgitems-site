export function isProfileProject(data: unknown): data is ProfileProject {
  return (data as ProfileProject).result !== undefined;
}

export function isStagesResult(data: unknown): data is StagesResult {
  return (data as StagesResult).result !== undefined;
}
