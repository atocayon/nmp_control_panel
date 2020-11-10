import actionTypes from "../actions/actionTypes";

const fetch_doc_types = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_DOC_TYPES:
      return [...action.data];
    default:
      return state;
  }
};

export default fetch_doc_types;
