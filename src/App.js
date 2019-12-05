import React from "react";
import LoginComponent from "./Components/Pages/Login";
import ListComponent from "./Components/Pages/List";
import CreateComponent from "./Components/Pages/Create";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
import { BASE_URL } from "./Environment/Environment";
import Grid from "@material-ui/core/Grid";

//import createBrowserHistory from 'history/createBrowserHistory';

function App(props) {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [data, setData] = React.useState();

  async function getList(flag) {
    if (flag) {
      const response = await fetch(`${BASE_URL}users?page=2`);
      response.json().then(response => {
        setData(response.data);
        setLoggedIn(flag);
      });
    }
  }

  async function deleteData(id) {
    const response = await fetch(`${BASE_URL}users/${id}`, {
      method: "DELETE"
    });
    if (response.status === 204) {
      setData(
        data.filter(value => {
          return value.id !== id;
        })
      );
    }
  }

  return (
    <React.Fragment>
      <LoginComponent getList={getList} />
      <Router basename="/">
        <Grid container direction="column" alignItems="center" justify="center">
          {loggedIn ? (
            <React.Fragment>
              <NavLink to="/list">List</NavLink>
              <NavLink to="/create">Create User</NavLink>
            </React.Fragment>
          ) : (
            ""
          )}
        </Grid>
        <Route
          path="/list"
          exact
          render={() =>
            loggedIn ? (
              <ListComponent deleteData={deleteData} data={data} />
            ) : (
              <Redirect to="/" />
            )
          }
        ></Route>

        <Route
          path="/create"
          exact
          render={() =>
            loggedIn ? (
              <CreateComponent deleteData={deleteData} data={data} />
            ) : (
              <Redirect to="/" />
            )
          }
        ></Route>
      </Router>
    </React.Fragment>
  );
}

//(
//loggedIn ? (<ListComponent />) : (<Redirect to="/"/>)
//{/* {loggedIn ? <ListComponent deleteData={deleteData} data={data} /> : ""} */}
//{/* {loggedIn ? <CreateComponent /> : ""} */}
export default App;
