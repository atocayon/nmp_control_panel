import actionTypes from "./actionTypes";
import axios from "axios";

const new_section = ({ divid, section, secshort }) => {
  return (dispatch) => {
    return axios
      .post(`http://${process.env.REACT_APP_SERVER}/section/add/new`, {
        divid,
        section,
        secshort,
      })
      .then((res) => {
        dispatch({ type: actionTypes.NEW_SECTION });
      })
      .catch((err) => {
        throw err;
      });
  };
};

export { new_section };
