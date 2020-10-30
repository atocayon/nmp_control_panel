import actionTypes from "../actions/actionTypes";

const fetch_all_users = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_USERS:
      return [...action.data];
    default:
      return state;
  }
};

export default fetch_all_users;
