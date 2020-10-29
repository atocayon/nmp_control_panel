// @flow
import React, { useEffect, useState } from "react";
import CircularProgress from "../../common/CircularProgress";
import InputField from "../../common/textField/InputField";
import InputIcon from "@material-ui/icons/Input";
export default function Login(props) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div>
      {loading && <CircularProgress />}
      <div className={"row"}>
        <div className={"col-md-4"}></div>
        <div className={"col-md-4"}>
          <div className={"login-container"}>
            <h1>
              <span>NMP |</span>&nbsp;Control Panel
            </h1>
            <br />
            <div className={"row"}>
              <div className={"col-md-1"}></div>
              <div className={"col-md-10"}>
                <form onSubmit={props.onLogin}>
                  <InputField
                    autoFocus={true}
                    name={"usernameOrEmail"}
                    label={"Username or Email"}
                    value={props.data.usernameOrEmail}
                    onChange={props.onChange}
                    error={props.error.usernameOrEmail}
                    //   variant={"outlined"}
                    // type={}
                  />
                  <br />
                  <br />
                  <InputField
                    //   autoFocus={true}
                    name={"password"}
                    label={"Password"}
                    value={props.data.password}
                    onChange={props.onChange}
                    //   variant={"outlined"}
                    type={props.inputType ? "text" : "password"}
                    setType={props.setType}
                    error={props.error.password}
                  />

                  <button className={"btn btn-lg btn-primary"} type={"submit"}>
                    <InputIcon />
                    &nbsp;Login
                  </button>
                </form>
              </div>
              <div className={"col-md-1"}></div>
            </div>
          </div>
        </div>
        <div className={"col-md-4"}></div>
      </div>
    </div>
  );
}
