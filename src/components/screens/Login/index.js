// @flow
import React, { useEffect, useState } from "react";
import CircularProgress from "../../common/CircularProgress";
import InputField from "../../common/textField/InputField";
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
            <InputField
              autoFocus={true}
              name={"unameOrEmail"}
              label={"Username or Email"}
            //   variant={"outlined"}
              // type={}
            />
            <br />
            <br />
            <InputField
            //   autoFocus={true}
              name={"pword"}
              label={"Password"}
            //   variant={"outlined"}
              // type={}
            />
          </div>
        </div>
        <div className={"col-md-4"}></div>
      </div>
    </div>
  );
}
