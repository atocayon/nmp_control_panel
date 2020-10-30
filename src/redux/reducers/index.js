import { combineReducers } from "redux";
import login from "./login";
import fetch_all_users from "./fetch_all_users";
const rootReducer = combineReducers({
    login,
    fetch_all_users
});

export default rootReducer;