import { combineReducers } from "redux";
import login from "./login";
import logout from "./logout";
import fetch_all_users from "./fetch_all_users";
import fetch_current_user from "./fetch_current_user";
import user_update_modal from "./user_update_modal";
import fetch_sections from "./fetch_sections";
import user_registration from "./user_registration";
import fetch_divisions from "./fetch_divisions";
import fetch_doc_types from "./fetch_doc_types";
import dialog_modal from "./dialog_modal";
import new_division from "./new_division";
import new_section from "./new_section";
import new_docType from "./new_docType";
import fetch_doc_logs from "./fetch_doc_logs";
import fetch_work_logs from "./fetch_work_logs";
const rootReducer = combineReducers({
  login,
  logout,
  fetch_all_users,
  fetch_current_user,
  fetch_divisions,
  fetch_sections,
  fetch_doc_types,
  user_update_modal,
  user_registration,
  dialog_modal,
  new_division,
  new_section,
  new_docType,
  fetch_doc_logs,
  fetch_work_logs,
});

export default rootReducer;
