import actionTypes from "./actionTypes";
import axios from "axios";
const deleteUser = ({ ...data }) => {
  const { user_id } = data;
  return (dispatch) => {
    return axios
      .post(`http://${process.env.REACT_APP_SERVER}/deleteUser`, { user_id })
      .then((res) => {
        dispatch({ type: actionTypes.UPDATE });
      })
      .catch((err) => {
        throw err;
      });
  };
};

export { deleteUser };
