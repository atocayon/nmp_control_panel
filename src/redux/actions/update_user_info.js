import actionTypes from "./actionTypes";
import axios from "axios";
import Reactotron from "reactotron-react-js";
const update_user_info = ({ ...data }) => {
  return (dispatch) => {
    Reactotron.log(data);
    return axios
      .post(`http://${process.env.REACT_APP_SERVER}/user/update`, { data })
      .then((res) => {
        dispatch({ type: actionTypes.UPDATE });
      })
      .catch((err) => {
        throw err;
      });
  };
};

export { update_user_info };
