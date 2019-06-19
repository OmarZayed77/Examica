import React, { Component } from "react";
import { connect } from "react-redux";
import { setToken } from "../Store/Actions/authActions";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "element-theme-default";
import Nav from "./../Components/Navbar/Navbar";
import Home from "../Pages/Home-Page/Home-Page";
import Profile from '../Pages/Profile-Page/Profile-Page'
import Register from '../Containers/Account/Register/Register';
import Login from '../Containers/Account/Login/Login';
import LogOut from '../Components/LogoutButton/LogoutButton';
import * as orgActions from "../Store/Actions/organizationActions";
import "./App.css";


class App extends Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.setToken();
      this.props.getOrgs(localStorage.getItem("token"));
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Redirect from="/home" to="/" />
            <Route path="/profile" component={Profile}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/Login" component={Login}></Route>
            <Route path="/LogOut" component={LogOut}></Route>
            <Route path="/" component={Home} />
            
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
