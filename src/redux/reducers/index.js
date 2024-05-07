const initialState = {
  company: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITE":
      return {
        ...state,
        company: {
          ...state.company,

          content: [...state.company.content, action.payload],
        },
      };
    case "REMOVE_FROM_FAVOURITE":
      return {
        ...state,
        company: {
          ...state.company,

          content: state.company.content.filter((_, i) => i !== action.payload),
        },
      };
    default:
      return state;
  }
};
export default mainReducer;
