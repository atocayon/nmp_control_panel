import actionTypes from "./actionTypes";
import axios from "axios";
const fetch_current_user = (user_id) => {
  return (dispatch) => {
    return axios
      .get(`http://${process.env.REACT_APP_SERVER}/user/${user_id}`)
      .then((res) => {
        dispatch({ type: actionTypes.FETCH_CURRENT_USER, data: res.data });
      })
      .catch((err) => {
        throw err;
      });
  };
};

export { fetch_current_user };
