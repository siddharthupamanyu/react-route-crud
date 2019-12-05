import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
}));

export default function ButtonComponent(props) {

  const handleClick = () => {
    props.clickButton();
  }

  const classes = useStyles();
  return (
    <React.Fragment>
      <Button
        className={classes.margin}
        variant="contained"
        color="primary"
        onClick={handleClick}
        size="small"
      >
        {props.type}
      </Button>
    </React.Fragment>
  );
}
