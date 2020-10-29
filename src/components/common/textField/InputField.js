import React from "react";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

export default function InputField(props) {
  let error = false;
  let _type = props.type || "text";
  if (props.error) {
    error = true;
  }

  return (
    <TextField
      autoFocus={props.autoFocus}
      error={error}
      id={props.id}
      name={props.name}
      label={props.label}
      variant={props.variant}
      value={props.value}
      defaultValue={props.defaultValue}
      fullWidth
      disabled={props.disabled}
      onChange={props.onChange}
      type={_type}
      helperText={props.error ? props.error : ""}
      InputProps={{ className: "textInput" }}
    />
  );
}
