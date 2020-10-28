// @flow
import React, { useEffect, useState } from "react";
import { getFromStorage } from "../local_storage";
import { Redirect } from "react-router";

import CircularProgress from "./common/CircularProgress";
import Main from "./screens/Main";
import Login from "./screens/Login";
export default function Redirection(props) {
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    setLoading(false);
    const obj = getFromStorage("control-panel");

    if (obj && obj.token) {
        setRedirect(true);
    }
  }, []);

  return (
    <div>
      {loading && <CircularProgress />}
      {redirect && <Redirect to={"/cpanel"} /> }
      {!redirect && <Redirect to={"/cpanel/login"} /> }
  
    </div>
  );
}
