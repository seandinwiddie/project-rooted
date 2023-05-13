import { createSlice } from '@reduxjs/toolkit';
import { SET_SAMPLE_DATA } from '../actions/actionTypes';

const initialState = {
  data: [],
};

const sampleSlice = createSlice({
  name: 'sample',
  initialState,
  reducers: {
    setSampleData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setSampleData } = sampleSlice.actions;
export default sampleSlice.reducer;