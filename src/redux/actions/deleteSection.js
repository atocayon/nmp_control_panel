import actionTypes from "./actionTypes";
import axios from "axios";
const deleteSection = ({ secid }) => {
  return (dispatch) => {
    return axios
      .post(`http://${process.env.REACT_APP_SERVER}/section/delete`, { secid })
      .then((res) => {
        dispatch({ type: actionTypes.UPDATE });
      })
      .catch((err) => {
        throw err;
      });
  };
};

export { deleteSection };
