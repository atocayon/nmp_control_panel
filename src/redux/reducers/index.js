import { combineReducers } from "redux";
import login from "./login";
import fetch_all_users from "./fetch_all_users";
import fetch_current_user from "./fetch_current_user";
const rootReducer = combineReducers({
    login,
    fetch_all_users,
    fetch_current_user
});

export default rootReducer;