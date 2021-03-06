import actionTypes from "../actions/actionTypes";

const fetch_divisions = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_DIVISION:
      return [...action.data];

    case actionTypes.SEARCH:
      return [...state].filter((item) => {
        if (
          item.department.charAt(0).toLowerCase() ===
            action.data.charAt(0).toLowerCase() ||
          item.department.charAt(item.department.length - 1).toLowerCase() ===
            action.data.charAt(action.data.length - 1).toLowerCase()
        ) {
          return item;
        }
      });
    default:
      return state;
  }
};

export default fetch_divisions;
