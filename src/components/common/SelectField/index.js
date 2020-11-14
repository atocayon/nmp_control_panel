// @flow
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: "20vw",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectField(props) {
  const classes = useStyles();

  return (
    <FormControl
      variant="outlined"
      className={classes.formControl}
      error={props.error}
    >
      <InputLabel>{props.label}</InputLabel>
      <Select
        label={props.label}
        value={props.value}
        displayEmpty={props.displayEmpty}
        name={props.name}
        onChange={props.onChange}
      >
        <MenuItem
          value={props.value !== null && props.value ? props.value : ""}
        >
          <em>
            {props.value !== null && props.value
              ? props.value.charAt(0).toUpperCase() + props.value.slice(1)
              : ""}
          </em>
        </MenuItem>

        {props.value !== null && props.value
          ? props.option
              .filter(
                (item) =>
                  item.value !==
                  props.value.charAt(0).toUpperCase() + props.value.slice(1)
              )
              .map((item, key) => (
                <MenuItem key={key} value={item.id}>
                  {item.value}
                </MenuItem>
              ))
          : props.option.map((item, key) => (
              <MenuItem key={key} value={item.id}>
                {item.value}
              </MenuItem>
            ))}
      </Select>
    </FormControl>
  );
}
