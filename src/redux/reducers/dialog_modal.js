import actionTypes from "../actions/actionTypes";

const dialog_modal = (
  state = {
    open: false,
    type: "",
    from: "",
    data: {},
    message: "",
  },
  action
) => {
  switch (action.type) {
    case actionTypes.HANDLE_DIALOG_MODAL:
      return Object.assign({}, state, {
        open: !state.open,
        type: action.data.type || "",
        from: action.data.from || "",
        data: { ...action.data.data },
      });
    case actionTypes.INPUT_CHANGE:
      return Object.assign({}, state, {
        data: { ...state.data, [action.data.name]: action.data.value },
      });

    case actionTypes.UPDATE:
      return Object.assign({}, state, {
        message: "success",
      });

    case actionTypes.CLEAR_MESSAGE:
      return Object.assign({}, state, {
        open: false,
        type: "",
        from: "",
        data: {},
        message: "",
      });
    default:
      return state;
  }
};

export default dialog_modal;
