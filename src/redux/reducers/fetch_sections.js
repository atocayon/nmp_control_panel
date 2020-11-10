import actionTypes from "../actions/actionTypes";

const fetch_sections = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_SECTIONS:
      return [...action.data];
    default:
      return state;
  }
};

export default fetch_sections;
