// Import the necessary action types
import { SET_SAMPLE_DATA } from './actions/actionTypes';

// Define the initial state of the sample module
const initialState = {
  data: [],
};

// Define the reducer function for the sample module
const sampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SAMPLE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default sampleReducer;
