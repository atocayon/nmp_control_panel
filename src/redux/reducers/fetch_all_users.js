import actionTypes from "../actions/actionTypes";

const fetch_all_users = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_USERS:
      return [...action.data];

    case actionTypes.SEARCH:
      return [...state].filter((item) => {
        if (
          item.employeeId.charAt(0).toLowerCase() ===
            action.data.charAt(0).toLowerCase() ||
          item.name.charAt(0).toLowerCase() ===
            action.data.charAt(0).toLowerCase() ||
          item.employeeId.charAt(item.employeeId.length - 1).toLowerCase() ===
            action.data.charAt(action.data.length - 1).toLowerCase() ||
          item.name.charAt(item.name.length - 1).toLowerCase() ===
            action.data.charAt(action.data.length - 1).toLowerCase()
        ) {
          return item;
        }
      });
    default:
      return state;
  }
};

export default fetch_all_users;
