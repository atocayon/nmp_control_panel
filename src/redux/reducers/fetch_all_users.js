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
    default:
      return state;
  }
};

export default fetch_all_users;
