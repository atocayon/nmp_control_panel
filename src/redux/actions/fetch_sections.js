import actionTypes from "./actionTypes";
import axios from "axios";
const fetch_sections = () => {
  return (dispatch) => {
    return axios
      .get(`http://${process.env.REACT_APP_SERVER}/fetchSections`)
      .then((res) => {
        dispatch({ type: actionTypes.FETCH_SECTIONS, data: res.data });
      })
      .catch((err) => {
        throw err;
      });
  };
};

export { fetch_sections };
