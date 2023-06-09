import { TranscriptItemModel } from './TranscriptItemModel';

export class TranscriptModel {
  items?: TranscriptItemModel[];

  constructor(data?: Partial<TranscriptModel>) {
    Object.assign(this, data);
  }
}
