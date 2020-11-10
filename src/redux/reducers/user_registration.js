import actionTypes from "../actions/actionTypes";

const user_registration = (
  state = {
    employeeId: "",
    name: "",
    username: "",
    password: "",
    cPassword: "",
    contact: "",
    email: "",
    section: "",
    position: "",
    dts_role: "",
    work_queue_role: "",
    control_panel: "",
    message: "",
  },
  action
) => {
  switch (action.type) {
    case actionTypes.USER_REG:
      return Object.assign({}, state, {
        message: "success",
      });

    case actionTypes.INPUT_CHANGE:
      return Object.assign({}, state, {
        [action.data.name]: action.data.value,
      });

    case actionTypes.CLEAR_MESSAGE:
      return Object.assign({}, state, {
        employeeId: "",
        name: "",
        username: "",
        password: "",
        cPassword: "",
        contact: "",
        email: "",
        section: "",
        position: "",
        dts_role: "",
        work_queue_role: "",
        control_panel: "",
        message: "",
      });

    default:
      return state;
  }
};

export default user_registration;
