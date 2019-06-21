import React, { Component } from "react";
import { connect } from "react-redux";
import { setToken } from "../Store/Actions/authActions";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Loading } from "element-react/next";
import "element-theme-default";
import Profile from "../Pages/Profile-Page/Profile-Page";
import Register from "../Containers/Account/Register/Register";
import Login from "../Containers/Account/Login/Login";
import LogOut from "../Components/LogoutButton/LogoutButton";
import Footer from "../Components/Footer";
import PricingPlan from "../Pages/PricingPlan";
import * as orgActions from "../Store/Actions/organizationActions";
import Exam from '../Containers/exams/exam-list';
import AboutUs from '../Components/AboutUs';
import "./App.css";
import Home from "../Pages/Home-Page";
import OrganizationPage from "../Pages/organizationPage";
import AddOrganization from "../Containers/AddOrgnization";
import ComprehenssionQuestion from "../Containers/CreateComprehenssionQuestion";
import ChoiseQuestion from "../Containers/CreateChoiseQuestion";
import "./App.css";

import UpperNav from '../Components/Navbar/upperNavbar';
import LowerNav from '../Components/Navbar/lowerNavbar';
import MiddleNav from '../Components/Navbar/MiddleNavbar';
import ExamAdd from "../Containers/exams/exam-add/exam-add";
import ContactUs from '../Components/Contact-Us';

class App extends Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.setToken();
    }
  }

  render() {
    const loading = this.props.isLoading ? (
      <Loading fullscreen={true} text="Please Wait   Loading..." />
    ) : null;
    return (
      <>
        {loading}
        <BrowserRouter>
          <UpperNav />
          <Switch>
            <Route path="/organization" component={MiddleNav}/>>
            <Route component={LowerNav}/>>
          </Switch>
          <Switch>
            <Redirect from="/home" to="/" />
            <Route path="/profile" component={Profile} />
            <Route path="/buyOrg" component={AddOrganization} />
            <Route path="/organization/exams" component={Exam} />
            <Route path="/organization/:id" component={OrganizationPage} />
            <Route path="/register" component={Register} />
            <Route path="/Login" component={Login} />
            <Route path="/LogOut" component={LogOut} />
            <Route path="/Pricing" component={PricingPlan} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/exams/add" component={ExamAdd}/>
            <Route path="/contactus" component={ContactUs} />
            <Route path="/ComprehenssionQuestion" component={ComprehenssionQuestion} />
            <Route path="/ChoiseQuestion" component={ChoiseQuestion} />            
            <Route path="/" exact component={Home} />
            <Route
              render={() => {
                return "not found!!!";
              }}
            />
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
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
    userData: state.auth.userData,
    isLoading: state.isLoading
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
