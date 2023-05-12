const initialState = {
  history: []
};

function commandReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_COMMAND':
      return {
        ...state,
        history: [...state.history, action.payload]
      };
    default:
      return state;
  }
}

export default commandReducer;
