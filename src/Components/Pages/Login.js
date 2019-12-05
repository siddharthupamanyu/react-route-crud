import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "../UX/TextFields";
import Button from "../UX/Buttons";
import { BASE_URL } from "../../Environment/Environment";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    display: "flex"
  },
  margin: {
    margin: theme.spacing(1)
  },
  header: {
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "center"
  },
  alignCenter: {
    textAlign: "center"
  }
}));

export default function LoginComponent(props) {
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();

  const getUsername = user => {
    setUsername(user);
  };

  const getPassword = pass => {
    setPassword(pass);
  };

  async function loginClicked() {
    let loginDetails = {
      email: username,
      password: password
    };
    const response = await fetch(`${BASE_URL}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginDetails)
    });
    if (response.status === 200) {
      props.getList(true);
    }
  }

  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={4}>
          <Paper className={clsx(classes.paper, classes.header)}>
            <span className={clsx(classes.alignCenter)}>CRUD APPLICATION</span>
          </Paper>
          {/* </Grid>
        <Grid item xs={6}> */}
          <Paper className={clsx(classes.paper, classes.header)}>
            <TextField
              label="Username"
              type="username"
              getValue={getUsername}
            />
            <TextField
              label="Password"
              type="password"
              getValue={getPassword}
            />
            <Button type="Login" clickButton={loginClicked} />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
