// @flow
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { getFromStorage } from "../../local_storage";
import CircularProgress from "../common/CircularProgress";
import Login from "../screens/Login";
import Main from "../screens/Main";
import SideBar from "../common/SideBar";
import { withSnackbar } from "notistack";
import { connect } from "react-redux";
import { clear_message } from "../../redux/actions/clear_message";
import { input_change } from "../../redux/actions/input_change";
import { login } from "../../redux/actions/login_logout";
import {fetch_all_users} from "../../redux/actions/fetch_all_users";
function Screens(props) {
  const [loading, setLoading] = useState(true);
  const [endSession, setEndSession] = useState(false);
  const [inputType, setInputType] = useState(false);
  const [error, setError] = useState({});
  const [redirect, setRedirect] = useState({ location: "" });

  useEffect(() => {
    const obj = getFromStorage("control-panel");
    setLoading(false);
    setEndSession(!(obj && obj.token));
    console.log(props.match.params);

    if(obj && obj.token){
      props.fetch_all_users();
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
        setError({ ...error, usernameOrEmail: "", password: "" });
        props.clear_message();
        const variant = "info";
        props.enqueueSnackbar(`Hi! ${props._login.message.name}...`, {
          variant,
        });

        setRedirect({ ...redirect, location: "cpanel" });
      }
    }
  }, [redirect, props.match.params, props._login.message]);

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
      console.log("login");
      return;
    }
  };
  return (
    <div>
      {loading && <CircularProgress />}
      {endSession && <Redirect to={"/cpanel/login"} />}
      {redirect.location === "cpanel" && (
        <Redirect to={`/${redirect.location}`} />
      )}

      {Object.keys(props.match.params).length === 0 &&
      !props.match.params.login ? (
        <SideBar />
      ) : (
        ""
      )}

      {Object.keys(props.match.params).length === 0 && (
        <div className={"main"}>
          <Main data={props._fetch_all_users} />
        </div>
      )}

      {props.match.params.login && (
        <Login
          onChange={props.input_change}
          data={props.login}
          inputType={inputType}
          setInputType={setInputType}
          onLogin={onLogin}
          error={error}
        />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    _login: state.login,
    _fetch_all_users: state.fetch_all_users
  };
};

const mapDispatchToProps = {
  login,
  input_change,
  clear_message,
  fetch_all_users
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSnackbar(Screens));
