export class TranscriptItemModel {
  rowHeader?: string;
  english?: string;
  history?: string;
  korean?: string;
  math?: string;
  inquiry1?: string;
  inquiry2?: string;

  constructor(data?: Partial<TranscriptItemModel>) {
    return Object.assign(this, data);
  }
}

export interface ScoreData {}
