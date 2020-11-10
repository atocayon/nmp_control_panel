import actionTypes from "./actionTypes";
const input_change = ({ target }) => {
  return (dispatch) => {
    return dispatch({
      type: actionTypes.INPUT_CHANGE,
      data: { name: target.name, value: target.value, type: target.type },
    });
  };
};

export { input_change };
