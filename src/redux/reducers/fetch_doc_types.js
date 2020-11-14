import actionTypes from "../actions/actionTypes";

const fetch_doc_types = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_DOC_TYPES:
      return [...action.data];
    case actionTypes.SEARCH:
      return [...state].filter((item) => {
        if (
          item.type.charAt(0).toLowerCase() ===
            action.data.charAt(0).toLowerCase() ||
          item.type.charAt(item.type.length - 1).toLowerCase() ===
            action.data.charAt(action.data.length - 1).toLowerCase()
        ) {
          return item;
        }
      });
    default:
      return state;
  }
};

export default fetch_doc_types;
