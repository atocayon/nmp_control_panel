import actionTypes from "../actions/actionTypes";

const defaultState = {
  usernameOrEmail: "",
  password: "",
  success: false,
};

const login = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INPUT_CHANGE:
      return Object.assign({}, state, {
        [action.data.name]: action.data.value,
      });

    case actionTypes.LOGIN:
      return Object.assign({}, state, {
        success: true,
      });

    default:
      return state;
  }
};

export default login;
