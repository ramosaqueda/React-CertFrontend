export const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return {
        ...state,
        sectionActive: action.payload,
      };
    default:
      return state;
  }
};
