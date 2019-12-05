import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

export default function ListComponent(props) {
  const classes = useStyles();

  const handleDeleteClicked = event => {
    props.deleteData(Number.parseInt(event.currentTarget.id));
  };

  return (
    <React.Fragment>
      <Grid container direction="column" alignItems="center" justify="center">
        <List className={classes.root}>
          {props.data.map(value => {
            return (
              <div key={value.id}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="No Image" src={value.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={value.id}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          {value.first_name} {value.last_name}
                        </Typography>
                        {` ${value.email}`}
                      </React.Fragment>
                    }
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      id={value.id}
                      edge="end"
                      aria-label="delete"
                      onClick={handleDeleteClicked}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider variant="inset" component="li" />
              </div>
            );
          })}
        </List>
      </Grid>
    </React.Fragment>
  );
}
