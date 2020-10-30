import actionTypes from "../actions/actionTypes";

const defaultState = {
  usernameOrEmail: "",
  password: "",
  message: "",
};

const login = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INPUT_CHANGE:
      return Object.assign({}, state, {
        [action.data.name]: action.data.value,
      });

    case actionTypes.LOGIN:
      return Object.assign({}, state, {
        message: action.data,
      });

    case actionTypes.CLEAR_MESSAGE:
      return Object.assign({}, state, {
        message: "",
      });

    default:
      return state;
  }
};

export default login;
