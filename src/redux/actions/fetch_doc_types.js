import actionTypes from "./actionTypes";
import axios from "axios";

const fetch_doc_types = () => {
  return (dispatch) => {
    return axios
      .get(`http://${process.env.REACT_APP_SERVER}/dts/document/list/types`)
      .then((res) => {
        dispatch({ type: actionTypes.FETCH_DOC_TYPES, data: res.data });
      })
      .catch((err) => {
        throw err;
      });
  };
};

export { fetch_doc_types };
