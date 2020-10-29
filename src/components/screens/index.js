// @flow
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { getFromStorage } from "../../local_storage";
import CircularProgress from "../common/CircularProgress";
import Login from "../screens/Login";
import { withSnackbar } from "notistack";
import { connect } from "react-redux";
import { input_change } from "../../redux/actions/input_change";
import { login } from "../../redux/actions/login_logout";

function Screens(props) {
  const [loading, setLoading] = useState(true);
  const [endSession, setEndSession] = useState(false);
  const [inputType, setInputType] = useState(false);
  const [error, setError] = useState({});
  useEffect(() => {
    const obj = getFromStorage("control-panel");
    setLoading(false);
    setEndSession(!(obj && obj.token));
    console.log(props.match.params);
  }, [props.match.params]);

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
      return;
    }
  };
  return (
    <div>
      {loading && <CircularProgress />}
      {endSession && <Redirect to={"/cpanel/login"} />}

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
  };
};

const mapDispatchToProps = {
  login,
  input_change,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSnackbar(Screens));
