import { createSlice } from '@reduxjs/toolkit';
import { TranscriptModel } from '../../../models/TranscriptModel';

export interface ScoresSliceInitialState {
  step?: number;
  transcript?: TranscriptModel;
  error?: any;
}

export const scoresSlice = createSlice({
  name: 'scores',
  initialState: { step: 0 } as ScoresSliceInitialState,
  reducers: {
    setTranscript(state, action) {
      state.transcript = JSON.parse(action.payload);
    },
    setStep(state, action) {
      state.step = Number(action.payload);
    },
    goNextStep(state) {
      state.step = Math.min(Number(state.step) + 1, 1);
    },
    goPrevStep(state) {
      state.step = Math.max(Number(state.step) - 1, 0);
    },
  },
});

export const scoresActions = scoresSlice.actions;
export const scoresReducer = scoresSlice.reducer;
