import actionTypes from "./actionTypes";
import axios from "axios";
const update_docType = ({ id, type }) => {
  return (dispatch) => {
    return axios
      .post(`http://${process.env.REACT_APP_SERVER}/document_type/update`, {
        id,
        type,
      })
      .then((res) => {
        dispatch({ type: actionTypes.UPDATE });
      })
      .catch((err) => {
        throw err;
      });
  };
};

export { update_docType };
