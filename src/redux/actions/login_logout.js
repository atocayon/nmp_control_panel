import actionTypes from "./actionTypes";
import axios from "axios";
import {setInStorage} from "../../local_storage";
import Reactotron from "reactotron-react-js";
const login = (data) => {
  return (dispatch) => {
    // Reactotron.log({...data});
    return axios.post(`http://${process.env.REACT_APP_SERVER}/login`, {
      ...data,
    }).then(res => {
        Reactotron.log(res.data);
        setInStorage("control-panel", {
          token: res.data.id,
          role: res.data.role.dts,
        });
        dispatch({type: actionTypes.LOGIN, data: res.data});
    }).catch(err => {throw err});
  };
};

export {login};
