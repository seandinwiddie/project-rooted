import { configureStore } from '@reduxjs/toolkit';
import sampleReducer from './modules/sample-module/reducers';

const store = configureStore({
  reducer: {
    sample: sampleReducer,
  },
});

export default store;