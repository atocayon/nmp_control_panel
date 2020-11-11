import actionTypes from "./actionTypes";
import axios from "axios";
const update_division = ({ ...data }) => {
  const { depid, department, depshort } = data;

  return (dispatch) => {
    return axios
      .post(`http://${process.env.REACT_APP_SERVER}/division/update`, {
        depid,
        department,
        depshort,
      })
      .then((res) => {
          dispatch({type: actionTypes.UPDATE});
      })
      .catch((err) => {
        throw err;
      });
  };
};

export { update_division };
