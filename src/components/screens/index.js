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
import NewDivision from "../screens/NewDivision";
import NewSection from "../screens/NewSection";
import NewDocType from "../screens/NewDocType";
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
import { handleDialogModal } from "../../redux/actions/handleDialogModal";
import { update_division } from "../../redux/actions/update_division";
import { deleteDivision } from "../../redux/actions/deleteDivision";
import { new_division } from "../../redux/actions/new_division";
import { update_section } from "../../redux/actions/update_section";
import { deleteSection } from "../../redux/actions/deleteSection";
import { new_section } from "../../redux/actions/new_section";
import { update_docType } from "../../redux/actions/update_docType";
import { deleteDocType } from "../../redux/actions/deleteDocType";
import { new_docType } from "../../redux/actions/new_docType";
import { fetch_doc_logs } from "../../redux/actions/fetch_doc_logs";
import io from "socket.io-client";
let socket;
function Screens(props) {
  const [loading, setLoading] = useState(true);
  const [endSession, setEndSession] = useState(false);
  const [inputType, setInputType] = useState(false);
  const [error, setError] = useState({});
  const [redirect, setRedirect] = useState({ location: "" });
  const [expand, setExpand] = useState({});
  const [activeStep, setActiveStep] = useState(0);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    socket = io(process.env.REACT_APP_SERVER);
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
      props.fetch_doc_logs(socket);
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

    if (props.dialog_modal.message !== "") {
      props.clear_message();
    }

    if (props._new_division.message !== "") {
      if (props._new_division.message === "success") {
        const variant = "success";
        props.enqueueSnackbar(`Added Success!`, {
          variant,
        });
        props.clear_message();
      }
    }

    if (props._new_section.message !== "") {
      if (props._new_section.message === "success") {
        const variant = "success";
        props.enqueueSnackbar(`Added Success!`, {
          variant,
        });
        props.clear_message();
      }
    }

    if (props._new_docType.message !== "") {
      if (props._new_docType.message === "success") {
        const variant = "success";
        props.enqueueSnackbar(`Added Success!`, {
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
    props.dialog_modal.message,
    props._new_division.message,
    props._new_section.message,
    props._new_docType.message,
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

  const handleExpand = (val) => {
    if (expand[val]) {
      setExpand({ ...expand, [val]: !expand[val] });
    } else {
      setExpand({ ...expand, [val]: true });
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
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
            modal={props.dialog_modal}
            handleDialogModal={props.handleDialogModal}
            search={props.search}
            update_division={props.update_division}
            deleteDivision={props.deleteDivision}
          />
        </div>
      )}

      {props.match.params.route === "sections" && (
        <div className={"main"}>
          <Sections
            data={props._fetch_sections}
            divisions={props._fetch_divisions}
            page={page}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            input_change={props.input_change}
            handleDialogModal={props.handleDialogModal}
            modal={props.dialog_modal}
            update_section={props.update_section}
            deleteSection={props.deleteSection}
            search={props.search}
          />
        </div>
      )}

      {props.match.params.route === "docLogs" && (
        <div className={"main"}>
          {" "}
          <DocLogs
            data={props._fetch_doc_logs}
            page={page}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            search={props.search}
            handleExpand={handleExpand}
            expand={expand}
            activeStep={activeStep}
            handleNext={handleNext}
            handleBack={handleBack}
            handleReset={handleReset}
          />
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
            search={props.search}
            handleDialogModal={props.handleDialogModal}
            modal={props.dialog_modal}
            update_docType={props.update_docType}
            deleteDocType={props.deleteDocType}
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

      {props.match.params.route === "new_division" && (
        <div className={"main"}>
          <NewDivision
            input_change={props.input_change}
            _new_division={props._new_division}
            new_division={props.new_division}
          />
        </div>
      )}

      {props.match.params.route === "new_section" && (
        <div className={"main"}>
          <NewSection
            input_change={props.input_change}
            sections={props._fetch_sections}
            divisions={props._fetch_divisions}
            _new_section={props._new_section}
            new_section={props.new_section}
          />
        </div>
      )}

      {props.match.params.route === "new_docType" && (
        <div className={"main"}>
          <NewDocType
            input_change={props.input_change}
            _new_docType={props._new_docType}
            new_docType={props.new_docType}
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
    dialog_modal: state.dialog_modal,
    _new_division: state.new_division,
    _new_section: state.new_section,
    _new_docType: state.new_docType,
    _fetch_doc_logs: state.fetch_doc_logs,
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
  handleDialogModal,
  update_division,
  deleteDivision,
  new_division,
  update_section,
  deleteSection,
  new_section,
  update_docType,
  deleteDocType,
  new_docType,
  fetch_doc_logs,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSnackbar(Screens));
