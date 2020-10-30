import actionTypes from "../actions/actionTypes";

const fetch_current_user = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CURRENT_USER:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

export default fetch_current_user;
