import actionTypes from "./actionTypes";
import axios from "axios";

const handleDialogModal = ({ ...data }) => {
  return (dispatch) => {
    if (data.id !== "") {
      return axios
        .get(`http://${process.env.REACT_APP_SERVER}/${data.route}/${data.id}`)
        .then((res) => {
          dispatch({
            type: actionTypes.HANDLE_DIALOG_MODAL,
            data: { data: res.data, type: data.type, from: data.route },
          });
        })
        .catch((err) => {
          throw err;
        });
    } else {
      dispatch({ type: actionTypes.HANDLE_DIALOG_MODAL, data: {} });
    }
  };
};

export { handleDialogModal };
