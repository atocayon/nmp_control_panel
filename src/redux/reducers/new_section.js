import actionTypes from "../actions/actionTypes";

const new_section = (
  state = { divid: "", section: "", secshort: "", message: "" },
  action
) => {
  switch (action.type) {
    case actionTypes.INPUT_CHANGE:
      return Object.assign({}, state, {
        [action.data.name]: action.data.value,
      });

    case actionTypes.NEW_SECTION:
      return Object.assign({}, state, {
        message: "success",
      });

    case actionTypes.CLEAR_MESSAGE:
      return Object.assign({}, state, {
        divid: "",
        section: "",
        secshort: "",
        message: "",
      });

    default:
      return state;
  }
};

export default new_section;
