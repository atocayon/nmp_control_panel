import actionTypes from "./actionTypes";
import axios from "axios";
const user_registration = ({  employeeId,
    name,
    username,
    password,
    contact,
    email,
    section,
    position,
    dts_role,
    work_queue_role,
    control_panel}) => {

  return (dispatch) => {
    return axios
      .post(`http://${process.env.REACT_APP_SERVER}/userRegistration`, {
        employeeId,
        name,
        username,
        password,
        contact,
        email,
        section,
        position,
        dts_role,
        work_queue_role,
        control_panel,
      })
      .then((res) => {
        dispatch({ type: actionTypes.USER_REG });
      })
      .catch((err) => {
        throw err;
      });
  };
};

export { user_registration };
