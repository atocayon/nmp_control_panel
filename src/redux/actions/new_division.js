import actionTypes from "./actionTypes";
import axios from "axios";
const new_division = ({ department, depshort }) => {
  return (dispatch) => {
    return axios
      .post(`http://${process.env.REACT_APP_SERVER}/division/add/new`, {
        department,
        depshort,
      })
      .then((res) => {
        dispatch({ type: actionTypes.NEW_DIVISION });
      })
      .catch((err) => {
        throw err;
      });
  };
};

export { new_division };
