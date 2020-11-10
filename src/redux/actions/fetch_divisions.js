import actionTypes from "./actionTypes";
import axios from "axios";
const fetch_divisions = () => {
  return (dispatch) => {
    return axios
      .get(`http://${process.env.REACT_APP_SERVER}/fetchDivisions`)
      .then((res) => {
        dispatch({ type: actionTypes.FETCH_DIVISION, data: res.data });
      })
      .catch((err) => {
        throw err;
      });
  };
};

export { fetch_divisions };
