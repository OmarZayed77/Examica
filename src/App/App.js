import React, { Component } from "react";
import { connect } from "react-redux";
import { setToken } from "../Store/Actions/authActions";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "element-theme-default";
import Nav from "./../Components/Navbar/Navbar";
import Profile from '../Pages/Profile-Page/Profile-Page'
import Register from '../Containers/Account/Register/Register';
import Login from '../Containers/Account/Login/Login';
import LogOut from '../Components/LogoutButton/LogoutButton';
import Footer from '../Components/Footer';
import * as orgActions from "../Store/Actions/organizationActions";
import "./App.css";
import ContactUs from '../Containers/Contact-Us'
import AboutUs from "../Components/AboutUs/AboutUs";



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
            <Redirect from="/home" to="/" />
            <Route path="/profile" component={Profile}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/Login" component={Login}></Route>
            <Route path="/LogOut" component={LogOut}></Route>
            <Route
              render={() => {
                return "not found!!!";
              }}
            />
          </Switch>
          {/* <Footer></Footer>
          <ContactUs /> */}
          <AboutUs />
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
