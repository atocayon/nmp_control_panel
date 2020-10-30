// @flow
import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import DescriptionIcon from "@material-ui/icons/Description";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { NavLink } from "react-router-dom";
export default function SideBar(props) {
  const activeStyle = {
    color: "#fff",
    fontWeight: "bold",
    textDecoration: "underline",
  };

  return (
    <div>
      <div className={"sidenav"}>
        <NavLink
          activeStyle={activeStyle}
          to={"/cpanel"}
          exact
          className={"navLink"}
        >
          <DashboardIcon />
          &nbsp;Dashboard
        </NavLink>

        <NavLink
          activeStyle={activeStyle}
          to={"/cpanel/division"}
          exact
          className={"navLink"}
        >
          <HomeWorkIcon />
          &nbsp;Divisions
        </NavLink>

        <NavLink
          activeStyle={activeStyle}
          to={"/cpanel/sections"}
          exact
          className={"navLink"}
        >
           <HomeWorkIcon />
          &nbsp;Sections
        </NavLink>

        <NavLink
          activeStyle={activeStyle}
          to={"/cpanel/docType"}
          exact
          className={"navLink"}
        >
           <DescriptionIcon />
          &nbsp;Document Types
        </NavLink>

        <NavLink
          activeStyle={activeStyle}
          to={"/cpanel/docLogs"}
          exact
          className={"navLink"}
        >
           <InsertChartIcon />
          &nbsp;Document Logs
        </NavLink>

        <NavLink
          activeStyle={activeStyle}
          to={"/cpanel/logout"}
          exact
          className={"navLink"}
        >
           <PowerSettingsNewIcon />
          &nbsp;Logout
        </NavLink>
    
      </div>
    </div>
  );
}
