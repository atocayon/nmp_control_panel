import actionTypes from "../actions/actionTypes";

const fetch_doc_logs = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_DOC_LOGS:
      return [...action.data];

    case actionTypes.SEARCH:
      return [...state].filter((item) => {
        if (
          item.document.documentID.charAt(0).toLowerCase() ===
            action.data.charAt(0).toLowerCase() ||
          item.document.subject.charAt(0).toLowerCase() ===
            action.data.charAt(0).toLowerCase() ||
          item.document.creator.charAt(0).toLowerCase() ===
            action.data.charAt(0).toLowerCase() ||
          item.document.doc_type.charAt(0).toLowerCase() ===
            action.data.charAt(0).toLowerCase() ||
          item.document.documentID
            .charAt(item.document.documentID.length - 1)
            .toLowerCase() ===
            action.data.charAt(action.data.length - 1).toLowerCase() ||
          item.document.subject
            .charAt(item.document.subject.length - 1)
            .toLowerCase() ===
            action.data.charAt(action.data.length - 1).toLowerCase() ||
          item.document.creator
            .charAt(item.document.creator.length - 1)
            .toLowerCase() ===
            action.data.charAt(action.data.length - 1).toLowerCase() ||
          item.document.doc_type
            .charAt(item.document.doc_type.length - 1)
            .toLowerCase() ===
            action.data.charAt(action.data.length - 1).toLowerCase()
        ) {
          return item;
        }
      });
    default:
      return state;
  }
};

export default fetch_doc_logs;
