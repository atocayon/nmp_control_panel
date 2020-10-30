import actionTypes from "./actionTypes";
import axios from "axios";
const fetch_all_users = () => {
  return (dispatch) => {
    return axios
      .get(`http://${process.env.REACT_APP_SERVER}/fetchUsers`)
      .then((res) => {
        dispatch({ type: actionTypes.FETCH_ALL_USERS, data: res.data });
      })
      .catch((err) => {
        throw err;
      });
  };
};

export { fetch_all_users };
