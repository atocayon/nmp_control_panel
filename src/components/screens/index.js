// @flow
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { getFromStorage } from "../../local_storage";
import CircularProgress from "../common/CircularProgress";
import Login from "../screens/Login";
import Divisions from "../screens/Divisions";
import Sections from "../screens/Sections";
import DocLogs from "../screens/DocLogs";
import DocTypes from "../screens/DocTypes";
import Main from "../screens/Main";
import UserRegistration from "../screens/UserRegistration";
import SideBar from "../common/SideBar";
import { withSnackbar } from "notistack";
import { connect } from "react-redux";
import { clear_message } from "../../redux/actions/clear_message";
import { input_change } from "../../redux/actions/input_change";
import { login } from "../../redux/actions/login_logout";
import { fetch_all_users } from "../../redux/actions/fetch_all_users";
import { fetch_current_user } from "../../redux/actions/fetch_current_user";
import { handleOnClickEditUser } from "../../redux/actions/handleOnClickEditUser";
import { handleCloseModal } from "../../redux/actions/handleCloseModal";
import { update_user_info } from "../../redux/actions/update_user_info";
import { fetch_sections } from "../../redux/actions/fetch_sections";
import { changePassword } from "../../redux/actions/changePassword";
import { deleteUser } from "../../redux/actions/deleteUser";
import { search } from "../../redux/actions/search";
import { user_registration } from "../../redux/actions/user_registration";
import { fetch_divisions } from "../../redux/actions/fetch_divisions";
import { fetch_doc_types } from "../../redux/actions/fetch_doc_types";
function Screens(props) {
  const [loading, setLoading] = useState(true);
  const [endSession, setEndSession] = useState(false);
  const [inputType, setInputType] = useState(false);
  const [error, setError] = useState({});
  const [redirect, setRedirect] = useState({ location: "" });

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const obj = getFromStorage("control-panel");
    setLoading(false);
    setEndSession(!(obj && obj.token));
    console.log(props.match.params);

    if (obj && obj.token) {
      props.fetch_all_users();
      props.fetch_current_user(obj.token);
      props.fetch_sections();
      props.fetch_divisions();
      props.fetch_doc_types();
    }

    if (props._login.message !== "") {
      if (props._login.message === "unrecognize") {
        setError({
          ...error,
          usernameOrEmail: "Unrecognize username or email",
          password: "",
        });
        props.clear_message();
      }

      if (props._login.message === "incorrect") {
        setError({
          ...error,
          usernameOrEmail: "",
          password: "Incorrect Password",
        });
        props.clear_message();
      }

      if (typeof props._login.message === "object") {
        if (props._login.message.role.control_panel === "super_admin") {
          setError({ ...error, usernameOrEmail: "", password: "" });
          props.clear_message();
          const variant = "info";
          props.enqueueSnackbar(`Hi! ${props._login.message.name}...`, {
            variant,
          });

          setRedirect({ ...redirect, location: "cpanel" });
        } else {
          setError({
            ...error,
            usernameOrEmail: "Unknown",
            password: "Unknown",
          });
        }
      }
    }

    if (props.user_update_modal.update) {
      props.clear_message();
    }

    if (props._user_registration.message !== "") {
      if (props._user_registration.message === "success") {
        const variant = "success";
        props.enqueueSnackbar(`Registration Success!`, {
          variant,
        });
        props.clear_message();
      }
    }
  }, [
    redirect,
    props.match.params,
    props._login.message,
    props.user_update_modal.update,
    props._user_registration.message,
  ]);

  const onLogin = (e) => {
    e.preventDefault();

    if (props._login.usernameOrEmail === "" && props._login.password === "") {
      setError({
        ...login,
        usernameOrEmail: "User or Email is Required",
        password: "Password is Required",
      });
      return;
    }

    if (props._login.usernameOrEmail === "") {
      setError({ ...login, usernameOrEmail: "Username or Email is Required" });
      return;
    }

    if (props._login.password === "") {
      setError({ ...login, password: "Password is Required" });
      return;
    }

    if (props._login.usernameOrEmail !== "" && props._login.password !== "") {
      props.login(props._login);
      // console.log("login");
      return;
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      {loading && <CircularProgress />}
      {endSession && <Redirect to={"/cpanel/login"} />}
      {redirect.location === "cpanel" && (
        <Redirect to={`/${redirect.location}`} />
      )}

      {props.match.params.route !== "login" && (
        <SideBar user={props._fetch_current_user} />
      )}

      {Object.keys(props.match.params).length === 0 &&
      !props.match.params.route ? (
        <div className={"main"}>
          <Main
            data={props._fetch_all_users}
            openUpdateUserModal={props.user_update_modal}
            handleOpenUserUpdateModal={props.handleOnClickEditUser}
            handleCloseOpenUserUpdate={props.handleCloseModal}
            page={page}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            input_change={props.input_change}
            update_user_info={props.update_user_info}
            sections={props._fetch_sections}
            changePassword={props.changePassword}
            deleteUser={props.deleteUser}
            search={props.search}
          />
        </div>
      ) : null}

      {props.match.params.route === "login" && (
        <Login
          onChange={props.input_change}
          data={props.login}
          inputType={inputType}
          setInputType={setInputType}
          onLogin={onLogin}
          error={error}
        />
      )}

      {props.match.params.route === "divisions" && (
        <div className={"main"}>
          <Divisions
            data={props._fetch_divisions}
            page={page}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            input_change={props.input_change}
          />
        </div>
      )}

      {props.match.params.route === "sections" && (
        <div className={"main"}>
          <Sections
            data={props._fetch_sections}
            page={page}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            input_change={props.input_change}
          />
        </div>
      )}

      {props.match.params.route === "docLogs" && (
        <div className={"main"}>
          {" "}
          <DocLogs />
        </div>
      )}

      {props.match.params.route === "docTypes" && (
        <div className={"main"}>
          <DocTypes
            data={props._fetch_doc_types}
            page={page}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            input_change={props.input_change}
          />
        </div>
      )}

      {props.match.params.route === "user_registration" && (
        <div className={"main"}>
          <UserRegistration
            sections={props._fetch_sections}
            data={props._user_registration}
            input_change={props.input_change}
            handleRegistration={props.user_registration}
          />
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    _login: state.login,
    _fetch_all_users: state.fetch_all_users,
    _fetch_current_user: state.fetch_current_user,
    user_update_modal: state.user_update_modal,
    _fetch_sections: state.fetch_sections,
    _user_registration: state.user_registration,
    _fetch_divisions: state.fetch_divisions,
    _fetch_doc_types: state.fetch_doc_types,
  };
};

const mapDispatchToProps = {
  login,
  input_change,
  clear_message,
  fetch_all_users,
  fetch_current_user,
  handleOnClickEditUser,
  handleCloseModal,
  update_user_info,
  fetch_sections,
  changePassword,
  deleteUser,
  search,
  user_registration,
  fetch_divisions,
  fetch_doc_types,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSnackbar(Screens));
