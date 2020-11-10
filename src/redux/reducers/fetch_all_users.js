import actionTypes from "../actions/actionTypes";

const fetch_all_users = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_USERS:
      return [...action.data];
    case actionTypes.INPUT_CHANGE_USER:
      return [...state].map((item) => {
        if (item.user_id.toString() === action.data.id.toString()) {
          return Object.assign({}, item, {
            [action.data.name]: action.data.value,
          });
        }
      });

    case actionTypes.SEARCH:
      return [...state].filter((item) => {
        if (
          item.employeeId.charAt(0) === action.data.charAt(0) ||
          item.name.charAt(0) === action.data.charAt(0) ||
          item.employeeId.charAt(item.employeeId.length - 1) ===
            action.data.charAt(action.data.length - 1) ||
          item.name.charAt(item.name.length - 1) ===
            action.data.charAt(action.data.length - 1)
        ) {
          return item;
        }
      });
    default:
      return state;
  }
};

export default fetch_all_users;
