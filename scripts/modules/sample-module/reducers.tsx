import { createSlice } from '@reduxjs/toolkit';
import { SET_SAMPLE_DATA } from '../actions/actionTypes';

const initialState = {
  data: [],
};

const sampleSlice = createSlice({
  name: 'sample',
  initialState,
  reducers: {
    updateSampleData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { updateSampleData } = sampleSlice.actions;
export default sampleSlice.reducer;