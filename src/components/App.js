// @flow
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Redirection from "./Redirection";
import Screens from "./screens";
export default function App(props) {
  return (
    <div>
      <Switch>
        <Route path={"/"} exact component={Redirection} />
        <Route path={"/cpanel/:login"} component={Screens} />
        <Route path={"/cpanel"} component={Screens} />
      </Switch>
    </div>
  );
}
