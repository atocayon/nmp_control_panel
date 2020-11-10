import actionTypes from "../actions/actionTypes";
import Reactotron from "reactotron-react-js";
const user_update_modal = (
  state = {
    open: false,
    update: false,
    data: {},
  },
  action
) => {
  switch (action.type) {
    case actionTypes.EDIT:
      return Object.assign({}, state, {
        open: true,
        data: action.data,
      });

    case actionTypes.INPUT_CHANGE:
      return Object.assign({}, state, {
        data: { ...state.data, [action.data.name]: action.data.value },
      });

    case actionTypes.CLOSE_MODAL:
      return Object.assign({}, state, {
        open: false,
      });

    case actionTypes.UPDATE:
      return Object.assign({}, state, {
        update: true,
      });

    case actionTypes.CLEAR_MESSAGE:
      return Object.assign({}, state, {
        open: false,

        update: false,
      });

    default:
      return state;
  }
};

export default user_update_modal;
