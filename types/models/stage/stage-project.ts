import type { Media, Preview } from '../media';
import type { Stage } from './stage';

export interface ProjectStage {
  id: number;
  property: Stage;
  preview: Preview;
  media: Array<Media>;
}
