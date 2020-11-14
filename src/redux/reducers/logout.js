import actionTypes from "../actions/actionTypes";

const logout = (state = "", action) => {
  switch (action.type) {
    case actionTypes.LOGOUT:
      return (state = action.data);
    case actionTypes.CLEAR_MESSAGE:
      return (state = "");
    default:
      return state;
  }
};

export default logout;
