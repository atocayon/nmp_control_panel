import actionTypes from "./actionTypes";
import axios from "axios";
const changePassword = ({ ...data }) => {
  const { user_id, password } = data;
  return (dispatch) => {
    return axios
      .post(`http://${process.env.REACT_APP_SERVER}/changepassword`, {
        user_id,
        password,
      })
      .then((res) => {
        dispatch({ type: actionTypes.UPDATE });
      })
      .catch((err) => {
        throw err;
      });
  };
};

export { changePassword };
