import React from "react";
import TextField from "../UX/TextFields";
import Button from "../UX/Buttons";
import Paper from "@material-ui/core/Paper";
import { BASE_URL } from "../../Environment/Environment";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";

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
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

export default function CreateComponent(props) {
  const classes = useStyles();
  const [name, setName] = React.useState();
  const [job, setJob] = React.useState();
  const [data, setData] = React.useState([]);
  const [isEditTrue, setEditTrue] = React.useState(false);
  const [editId, setEditId] = React.useState();

  const getName = name => {
    setName(name);
  };

  const getJob = job => {
    setJob(job);
  };

  async function createUser() {
    let user = {
      name: name,
      job: job
    };
    const response = await fetch(`${BASE_URL}users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    if (response.status === 201) {
      response.json().then(response => {
        let newData = data.concat(response);
        setData(newData);
      });
    }
  }

  async function editUser() {
    let user = {
      name: name,
      job: job
    };
    const response = await fetch(`${BASE_URL}users/${editId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    if (response.status === 200) {
      response.json().then(response => {
        response.id = editId;
        const index = data
          .map(value => Number.parseInt(value.id))
          .indexOf(editId);
        let newData = data.slice();
        newData[index] = response;
        setData(newData);
        setEditTrue(false);
      });
    }
  }

  const handleEditClicked = event => {
    setEditTrue(true);
    setEditId(Number.parseInt(event.currentTarget.id));
  };

  const editListMode = (
    <React.Fragment>
      <Paper className={clsx(classes.paper, classes.header)}>
        <TextField label="Name" type="name" getValue={getName} />
        <TextField label="Job" type="job" getValue={getJob} />
        <Button type="Edit User" clickButton={editUser} />
      </Paper>
    </React.Fragment>
  );

  const listMode = (
    <React.Fragment>
      <Grid container direction="column" alignItems="center" justify="center">
        {data ? (
          <Paper className={clsx(classes.paper, classes.header)}>
            <List className={classes.root}>
              {data.map(value => {
                return (
                  <div key={value.id}>
                    <ListItem alignItems="flex-start">
                      <ListItemText
                        primary={value.name}
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              className={classes.inline}
                              color="textPrimary"
                            >
                              {`${value.job}`}
                            </Typography>
                            {`- ${
                              value.createdAt
                                ? value.createdAt
                                : value.updatedAt
                            }`}
                          </React.Fragment>
                        }
                      />
                      <ListItemSecondaryAction>
                        <IconButton
                          id={value.id}
                          edge="end"
                          aria-label="delete"
                          onClick={handleEditClicked}
                        >
                          <EditIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </div>
                );
              })}
            </List>
          </Paper>
        ) : (
          ""
        )}
      </Grid>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Grid container direction="column" alignItems="center" justify="center">
        <Grid item xs={4}>
          <Paper className={clsx(classes.paper, classes.header)}>
            <TextField label="Name" type="name" getValue={setName} />
            <TextField label="Job" type="job" getValue={setJob} />
            <Button type="Create User" clickButton={createUser} />
          </Paper>
          {isEditTrue ? editListMode : listMode}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
