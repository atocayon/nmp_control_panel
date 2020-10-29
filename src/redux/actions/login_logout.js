import actionTypes from "./actionTypes";
import axios from "axios";
const login = (data) => {
  return (dispatch) => {
    return axios.post(`http://${process.env.REACT_APP_SERVER}/login`, {
      ...data,
    }).then(res => {
        
    }).catch(err => {throw err});
  };
};

export {login};
