import { SEARCH_JOB, GET_JOB_ERROR_OFF, GET_JOB_ERROR_ON } from "../actions";

const initialState = {
  content: null,
  hasError: false,
  errorMessage: "",
};

const searchJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_JOB:
      return {
        ...state,
        content: action.payload,
      };
    case GET_JOB_ERROR_ON:
      return {
        ...state,
        hasError: true,
        errorMessage: action.payload,
      };

    case GET_JOB_ERROR_OFF:
      return {
        ...state,
        hasError: false,
        errorMessage: "",
      };
    default:
      return state;
  }
};

export default searchJobReducer;
