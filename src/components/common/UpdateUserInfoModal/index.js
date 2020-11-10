// @flow
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import InputField from "../textField/InputField";
import SelectField from "../SelectField";
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    background: "#000",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function UpdateUserInfoModal(props) {
  const classes = useStyles();

  return (
    <Dialog
      fullScreen
      open={props.data.open}
      onClose={props.handleClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={props.handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            User Information
          </Typography>
          <Button autoFocus color="inherit" onClick={props.handleClose}>
            save
          </Button>
        </Toolbar>
      </AppBar>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-md-12"}>
            <br />
            <br />

            <div className={"row"}>
              <div className={"col-md-4"}>
                <InputField
                  name={"employeeId"}
                  variant={"outlined"}
                  label={"Employee ID"}
                  value={props.data.data.employeeId}
                />
                <br />
                <br />
                <SelectField
                  name={"dts_role"}
                  label={"DTS Role"}
                  value={props.data.data.dts_role}
                  option={[
                    { id: "admin", value: "Admin" },
                    { id: "member", value: "Member" },
                  ]}
                />
                <br />
                <br />
                <SelectField
                  name={"work_queue_role"}
                  label={"Work Queue Role"}
                  value={props.data.data.work_queue_role}
                  option={[
                    { id: "admin", value: "Admin" },
                    { id: "member", value: "Member" },
                  ]}
                />
                <br />
                <br />
                <SelectField
                  name={"secid"}
                  label={"Section"}
                  value={props.data.data.section}
                  option={props.sections}
                />
              </div>
            </div>
            <br />
            <InputField
              name={"name"}
              variant={"outlined"}
              label={"Name"}
              value={props.data.data.name || ""}
            />
            <br />
            <br />
            <InputField
              name={"username"}
              variant={"outlined"}
              label={"Username"}
              value={props.data.data.username || ""}
            />
            <br />
            <br />
            <InputField
              name={"contact"}
              variant={"outlined"}
              label={"Contact"}
              value={props.data.data.contact || ""}
            />
            <br />
            <br />
            <InputField
              name={"email"}
              variant={"outlined"}
              label={"Email"}
              value={props.data.data.email || ""}
            />

            <br />
            <br />
            <InputField
              name={"position"}
              variant={"outlined"}
              label={"Position"}
              value={props.data.data.position || ""}
            />
          </div>
        </div>
      </div>
    </Dialog>
  );
}
