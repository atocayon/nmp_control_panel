// @flow
import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputField from "../textField/InputField";
export default function ConfirmationModal(props) {
  return (
    <Dialog
      open={props.data.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle>
        {props.data.modal === "password" ? "Update Password ?" : "Delete ?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {props.data.modal === "password" && (
            <>
              <InputField
                name={"name"}
                variant={"filled"}
                disabled={true}
                value={props.data.data.name}
              />
              <br />
              <br />
              <InputField
                name={"password"}
                label={"New Password"}
                onChange={props.input_change}
                type={"password"}
              />
            </>
          )}
          {props.data.modal === "delete" &&
            `You are about to delete ${props.data.data.name} (${props.data.data.position}) of ${props.data.data.section}. Please be advise that this action cannot be undone.`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <button
          className={"btn btn-outline-primary"}
          onClick={props.handleClose}
        >
          Cancel
        </button>
        <button
          className={"btn btn-primary"}
          onClick={(e) => {
            e.preventDefault();
            props.data.modal === "password"
              ? props.changePassword(props.data.data)
              : props.deleteUser(props.data.data);
          }}
        >
          Confirm
        </button>
      </DialogActions>
    </Dialog>
  );
}
