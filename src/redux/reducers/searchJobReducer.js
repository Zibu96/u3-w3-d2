import { SEARCH_JOB } from "../actions";

const initialState = {
  content: null,
};

const searchJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_JOB:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default searchJobReducer;
