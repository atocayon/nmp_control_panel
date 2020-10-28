// @flow
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Redirection from "./Redirection";
import Screens from "./screens";
import NotFound from "./screens/404";

export default function App(props) {
  return (
    <div>
      <Switch>
        <Route path={"/cpanel/:login"} component={Screens} />
        <Route path={"/cpanel"} component={Screens} />
        <Route path={"/"} exact component={Redirection} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
