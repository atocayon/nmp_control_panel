import actionTypes from "../actions/actionTypes";

const fetch_divisions = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_DIVISION:
      return [...action.data];
    default:
      return state;
  }
};

export default fetch_divisions;
