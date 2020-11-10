import { combineReducers } from "redux";
import login from "./login";
import fetch_all_users from "./fetch_all_users";
import fetch_current_user from "./fetch_current_user";
import user_update_modal from "./user_update_modal";
import fetch_sections from "./fetch_sections";
import user_registration from "./user_registration";
import fetch_divisions from "./fetch_divisions";
const rootReducer = combineReducers({
  login,
  fetch_all_users,
  fetch_current_user,
  fetch_divisions,
  fetch_sections,
  user_update_modal,

  user_registration,
});

export default rootReducer;
