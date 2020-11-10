import actionTypes from "./actionTypes";
import axios from "axios";
const user_registration = ({ ...data }) => {
  return (dispatch) => {
    return axios
      .post(`http://${process.env.REACT_APP_SERVER}/userRegistration`, { data })
      .then((res) => {
        dispatch({ type: actionTypes.USER_REG });
      })
      .catch((err) => {
        throw err;
      });
  };
};

export { user_registration };
