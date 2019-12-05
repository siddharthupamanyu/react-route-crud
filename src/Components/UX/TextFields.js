import React from "react";
import clsx from "clsx";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    flexBasis: 200
  }
}));

///Summary
///TextField component which implements the Material UI Textfield
export default function TextFieldComponent(props) {
  const classes = useStyles();

  //event handler to handle change in value of textbox by user
  //it passes the value to event handler present in the parent
  const handleInputChange = event => {
    props.getValue(event.target.value);
  };
  //Enum to handle the Symbols for each type of TextField
  const adornmentEnum = {
    username: "$",
    password: "M",
    name: "ℛ",
    job: "$",
    payments: " "
  };
  //Used Freeze function to prevent enum from modifying
  Object.freeze(adornmentEnum);

  return (
    <React.Fragment>
      <TextField
        id={`filled-adornment-${props.type}`}
        type={props.type}
        className={clsx(classes.margin, classes.textField)}
        variant="filled"
        label={props.label}
        onChange={handleInputChange}
        //disabled={props.disabled}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {adornmentEnum[props.type]}
            </InputAdornment>
          )
        }}
      />
    </React.Fragment>
  );
}
