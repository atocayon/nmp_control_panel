import actionTypes from "../actions/actionTypes";

const new_division = (
  state = {
    depshort: "",
    department: "",
    message: "",
  },
  action
) => {
  switch (action.type) {
    case actionTypes.INPUT_CHANGE:
      return Object.assign({}, state, {
        [action.data.name]: action.data.value,
      });

    case actionTypes.NEW_DIVISION:
      return Object.assign({}, state, {
        message: "success",
      });

    case actionTypes.CLEAR_MESSAGE:
      return Object.assign({}, state, {
        depshort: "",
        department: "",
        message: "",
      });

    default:
      return state;
  }
};

export default new_division;
