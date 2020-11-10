import actionTypes from "./actionTypes";
import axios from "axios";
const handleOnClickEditUser = ({user_id, modal}) => {
  return (dispatch) => {
    return axios
      .get(`http://${process.env.REACT_APP_SERVER}/user/${user_id}`)
      .then((res) => {
        dispatch({
          type: actionTypes.EDIT,
          data: { modal: modal, data: res.data },
        });
      })
      .catch((err) => {
        throw err;
      });
    // return dispatch({ type: actionTypes.EDIT, data });
  };
};

export { handleOnClickEditUser };
