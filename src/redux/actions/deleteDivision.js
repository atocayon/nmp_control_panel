import actionTypes from "./actionTypes";
import axios from "axios";

const deleteDivision = ({ depid }) => {
  return (dispatch) => {
    return axios
      .post(`http://${process.env.REACT_APP_SERVER}/division/delete`, {
        depid,
      })
      .then((res) => {
        dispatch({ type: actionTypes.UPDATE });
      })
      .catch((err) => {
        throw err;
      });
  };
};

export { deleteDivision };
