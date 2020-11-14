import actionTypes from "./actionTypes";
import axios from "axios";
const deleteDocType = ({ id }) => {
  return (dispatch) => {
    return axios
      .post(`http://${process.env.REACT_APP_SERVER}/document_type/delete`, {
        id,
      })
      .then((res) => {
        dispatch({ type: actionTypes.UPDATE });
      })
      .catch((err) => {
        throw err;
      });
  };
};

export { deleteDocType };
