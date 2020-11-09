import actionTypes from "./actionTypes";
import Reactotron from "reactotron-react-js";
const input_change = ({ target }) => {
  return (dispatch) => {
    return dispatch({
      type: actionTypes.INPUT_CHANGE,
      data: { name: target.name, value: target.value, type: target.type },
    });
  };
};

export { input_change };
