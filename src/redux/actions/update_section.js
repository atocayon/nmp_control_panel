import actionTypes from "./actionTypes";
import axios from "axios";
const update_section = ({ secid, divid, section, secshort }) => {
  return (dispatch) => {
    return axios
      .post(`http://${process.env.REACT_APP_SERVER}/section/update`, {
        secid,
        divid,
        section,
        secshort,
      })
      .then((res) => {
        dispatch({ type: actionTypes.UPDATE });
      })
      .catch((err) => {
        throw err;
      });
  };
};

export { update_section };
