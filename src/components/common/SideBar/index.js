// @flow
import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import DescriptionIcon from "@material-ui/icons/Description";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { NavLink } from "react-router-dom";
import logo from "../../../img/logo.png";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));
export default function SideBar(props) {
  const classes = useStyles();

  const activeStyle = {
    color: "#fff",
    fontWeight: "bold",
    textDecoration: "underline",
  };

  return (
    <div>
      <div className={"sidenav"}>
        {/* <img src={logo} className={"brand"} alt={"NMP"} /> */}
        <div className={"brand"}>
          <Avatar
            alt={props.user.name}
            src="/static/images/avatar/1.jpg"
            className={classes.large}
            title={props.user.name}
          />
        </div>

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
          to={"/cpanel/divisions"}
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
          to={"/cpanel/docTypes"}
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
          to={"/cpanel/workLogs"}
          exact
          className={"navLink"}
        >
          <InsertChartIcon />
          &nbsp;Work Queue Logs
        </NavLink>

        <button
          onClick={() => {
            props.logout(props.user);
          }}
          className={"btn btn-lg navLink"}
        >
          <PowerSettingsNewIcon />
          &nbsp;Logout, {props.user.name}
        </button>
      </div>
    </div>
  );
}
