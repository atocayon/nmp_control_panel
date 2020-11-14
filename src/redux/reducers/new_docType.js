import actionTypes from "../actions/actionTypes";

const new_docType = (
  state = {
    type: "",
    message: "",
  },
  action
) => {
  switch (action.type) {
    case actionTypes.INPUT_CHANGE:
      return Object.assign({}, state, {
        [action.data.name]: action.data.value,
      });

    case actionTypes.NEW_DOC_TYPE:
      return Object.assign({}, state, { message: "success" });

    case actionTypes.CLEAR_MESSAGE:
      return Object.assign({}, state, { type: "", message: "" });

    default:
      return state;
  }
};

export default new_docType;
