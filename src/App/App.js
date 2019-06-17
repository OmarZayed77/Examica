import React, { Component } from "react";
import { connect } from "react-redux";
import { setToken } from "../Store/Actions/authActions";
import "element-theme-default";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./../Components/Navbar/Navbar";
import Home from "../Pages/Home-Page/Home-Page";
import * as orgActions from "../Store/Actions/organizationActions";

class App extends Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.setToken(localStorage.getItem("token"));
      //this.props.getAll(localStorage.getItem("token"));
    } else
      this.props.getOrgs(
        "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJvQGcuY29tIiwianRpIjoiODE1ZmY4MjEtNTJhOS00MmJhLWJjNzktN2M1YTMwNmM4ZmU3IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIzM2EyYTVkNS01MmMzLTQyMGUtODlkNi05OGFiZWIyNzZmODQiLCJleHAiOjE1NjE0NjcyMjEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6MTU3NjYiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjE1NzY2In0.ZtQY3C3YYG7NDJi2phG8HT0Nv9ObTCcGr8bIioNvwq8"
      );
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/home" component={Home} />
            <Route
              render={() => {
                return "not found!!!";
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setToken: token => dispatch(setToken(token)),
    getOrgs: token => dispatch(orgActions.getAll(token))
  };
};

const mapStateToProps = state => {
  return {
    userData: state.auth.userData
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
