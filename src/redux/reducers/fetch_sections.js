import actionTypes from "../actions/actionTypes";

const fetch_sections = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_SECTIONS:
      return [...action.data];

    case actionTypes.SEARCH:
      return [...state].filter((item) => {
        if (
          item.section.charAt(0).toLowerCase() ===
            action.data.charAt(0).toLowerCase() ||
          item.section.charAt(item.section.length - 1).toLowerCase() ===
            action.data.charAt(action.data.length - 1).toLowerCase()
        ) {
          return item;
        }
      });
    default:
      return state;
  }
};

export default fetch_sections;
