import actionTypes from "../actions/actionTypes";
import Reactotron from "reactotron-react-js";
const user_update_modal = (
  state = {
    open: false,
    update: false,
    modal: "",
    data: {},
  },
  action
) => {
  switch (action.type) {
    case actionTypes.EDIT:
      return Object.assign({}, state, {
        open: true,
        data: action.data.data,
        modal: action.data.modal,
      });

    case actionTypes.INPUT_CHANGE:
      return Object.assign({}, state, {
        data: { ...state.data, [action.data.name]: action.data.value },
      });

    case actionTypes.CLOSE_MODAL:
      return Object.assign({}, state, {
        open: false,
        modal: "",
        data: {},
      });

    case actionTypes.UPDATE:
      return Object.assign({}, state, {
        update: true,
        modal: "",
        data: {},
      });

    case actionTypes.CLEAR_MESSAGE:
      return Object.assign({}, state, {
        open: false,
        update: false,
        modal: "",
        data: {},
      });

    default:
      return state;
  }
};

export default user_update_modal;
