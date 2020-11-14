import actionTypes from "./actionTypes";
import axios from "axios";
const new_docType = ({ type }) => {
  return (dispatch) => {
    return axios
      .post(`http://${process.env.REACT_APP_SERVER}/document_type/add/new`, {
        type,
      })
      .then((res) => {
        dispatch({ type: actionTypes.NEW_DOC_TYPE });
      })
      .catch((err) => {
        throw err;
      });
  };
};

export { new_docType };
