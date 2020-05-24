import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import { RootState } from "../store";
import { UserState } from "../store/user/types";
import { RouteProps } from "react-router-dom";

const PrivateRoute = (props: RouteProps) => {
  const user = useSelector<RootState, UserState>((state) => state.user);
  return (
    <>
      {!!user.token ? (
        <Route {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )}
    </>
  );
};

const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Register} />
      </Switch>
    </Router>
  );
};

export default Routes;
