import { createSlice } from '@reduxjs/toolkit';

interface UniversityInitialState {
  formData?: object;
}

export const universitySlice = createSlice({
  name: 'filterData',
  initialState: { formData: {} } as UniversityInitialState,
  reducers: {
    updateFilterData(state, action) {
      state.formData = action.payload;
    },
  },
});

export const universityActions = universitySlice.actions;
export const universityReducer = universitySlice.reducer;
