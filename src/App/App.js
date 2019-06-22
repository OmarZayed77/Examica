import React, { Component } from "react";
import { connect } from "react-redux";
import { setToken } from "../Store/Actions/authActions";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Loading } from "element-react/next";
import "element-theme-default";
import Profile from "../Pages/Profile-Page/Profile-Page";
import Register from "../Containers/Account/Register/Register";
import Login from "../Containers/Account/Login/Login";
import Footer from "../Components/Footer";
import PricingPlan from "../Pages/PricingPlan";
import * as orgActions from "../Store/Actions/organizationActions";
import AboutUs from '../Components/AboutUs';
import Home from "../Pages/Home-Page";
import Organization from "../Containers/organization";
import AddOrganization from "../Containers/AddOrgnization";
import ComprehenssionQuestion from "../Containers/CreateComprehenssionQuestion";
import ChoiseQuestion from "../Containers/CreateChoiseQuestion";
import CreateQuestion from '../Components/CreateQuestion';
import TrueOrFalseQuestion from '../Containers/CreateTrueOrFalseQuestion'
import "./App.css";
import UpperNav from '../Components/Navbar/upperNavbar';
import LowerNav from '../Components/Navbar/lowerNavbar';
import MiddleNav from '../Components/Navbar/MiddleNavbar';
import ExamAdd from "../Containers/exams/exam-add/exam-add"; 
import ContactUs from '../Components/Contact-Us';
import UntiteldQuestion from "../Components/Untiteld-Question/Untiteld-Question";
import AssignRole from "../Containers/assignRole/assignRole";
import RenderExam from '../Containers/exams/render-exam';

class App extends Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.setToken(localStorage.getItem("userId"), localStorage.getItem("token"));
    }
  }

  render() {
    const loading = this.props.isLoading ? (
      <Loading fullscreen={true} text="Please Wait   Loading..." />
    ) : null;

    let routes = (
      <>
        <UpperNav />
        <LowerNav />
        <Switch>
          <Redirect from="/home" to="/" />
          <Route path="/buyOrg" component={AddOrganization} />
          <Route path="/register" component={Register} />
          <Route path="/Login" component={Login} />
          <Route path="/Pricing" component={PricingPlan} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/" exact component={Home} />
          <Route
            render={() => {
              return "not found!!!";
            }}
          />
        </Switch>
      </>
    );
    if(this.props.isLoggedIn) {
      routes = (
        <>
        <div>
            <UpperNav />
            <Switch>
              <Route path="/organization" component={MiddleNav}/>>
              <Route component={LowerNav}/>>
            </Switch>
          </div>
          <Switch>
            <Redirect from="/home" to="/" />
            <Route path="/profile" component={Profile} />
            <Route path="/buyOrg" component={AddOrganization} />
            <Route path="/organization/:id" component={Organization} />
            <Redirect from="/register" to="/" />
            <Redirect from="/Login" to="/" />
            <Route path="/Pricing" component={PricingPlan} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="/untiteldq" component={UntiteldQuestion} />
            <Route path="/createquestion" component={CreateQuestion} />   
            <Route path="/exams/add" component={ExamAdd}/>
            <Route path="/exams/examinee/:id" component={RenderExam}/>
            <Route path="/users/assign" component={AssignRole}/>
            <Route path="/CreateQuestion/TrueOrFalseQuestion" component={TrueOrFalseQuestion} />
            <Route path="/CreateQuestion/ComprehenssionQuestion" component={ComprehenssionQuestion} />
            <Route path="/CreateQuestion/ChoiseQuestion" component={ChoiseQuestion} />            
            <Route path="/" exact component={Home} />
            <Route
              render={() => {
                return "not found!!!";
              }}
            />
          </Switch>
        </>
      );
    }
    return (
      <>
        {loading}
        <BrowserRouter>
          {routes}
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setToken: (userId, token) => dispatch(setToken(userId, token)),
    getOrgs: token => dispatch(orgActions.getAll(token))
  };
};

const mapStateToProps = state => {
  return {
    userData: state.auth.userData,
    isLoading: state.isLoading,
    isLoggedIn: state.auth.isLoggedIn
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
