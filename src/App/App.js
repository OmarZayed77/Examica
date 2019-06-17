<<<<<<< HEAD
import React, { Component } from "react";
import { connect } from "react-redux";
import { setToken } from "../Store/Actions/authActions";
import "element-theme-default";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./../Components/Navbar/Navbar";
import Home from "../Pages/Home-Page/Home-Page";
import * as orgActions from "../Store/Actions/organizationActions";
=======
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setToken } from '../Store/Actions/authActions'
import 'element-theme-default';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Register from '../Pages/Register'
import Login from '../Containers/Account/Login'
import Logout from '../Components/LogoutButton'
import CreateQuestion from '../Components/CreateQuestion';
import AddExam from '../Containers/exams/exam-add'
import CreateChoiseQuestion from '../Containers/CreateChoiseQuestion'
import CreateComprehenssionQuestion from '../Containers/CreateComprehenssionQuestion'
import CreateEssayQuestion from '../Containers/CreateEssayQuestion'
import CreateFillInTheBlankQuestion from '../Containers/CreateFillInTheBlankQuestion'
import CreateMatchingQuestion from '../Containers/CreateMatchingQuestion'
import CreateTrueOrFalseQuestion from '../Containers/CreateTrueOrFalseQuestion'
import CreateImportQuestion from '../Containers/CreateImportQuestion'
import QuestionSideNav from '../Components/QuestionSideNav';
import AddOrganization from '../Containers/AddOrgnization';
import OrganizationsList from '../Components/OrganizationsList';
import PoolOfQuestions from '../Containers/PoolOfQuestions'
import * as orgActions from '../Store/Actions/organizationActions';
import UserList from '../Containers/Users/UsersList';
import Exam from '../Containers/exams/render-exam';
>>>>>>> fb9a2e4f4be8f913b80b4e7570db5f8dd2a1f688

class App extends Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.setToken(localStorage.getItem("token"));
<<<<<<< HEAD
      //this.props.getAll(localStorage.getItem("token"));
    } else
      this.props.getOrgs(
        "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJvQGcuY29tIiwianRpIjoiODE1ZmY4MjEtNTJhOS00MmJhLWJjNzktN2M1YTMwNmM4ZmU3IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIzM2EyYTVkNS01MmMzLTQyMGUtODlkNi05OGFiZWIyNzZmODQiLCJleHAiOjE1NjE0NjcyMjEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6MTU3NjYiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjE1NzY2In0.ZtQY3C3YYG7NDJi2phG8HT0Nv9ObTCcGr8bIioNvwq8"
      );
=======
      //this.props.getAQuestionHeaderll(localStorage.getItem("token"));
    }
    else this.props.getOrgs('bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJvQGcuY29tIiwianRpIjoiODE1ZmY4MjEtNTJhOS00MmJhLWJjNzktN2M1YTMwNmM4ZmU3IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIzM2EyYTVkNS01MmMzLTQyMGUtODlkNi05OGFiZWIyNzZmODQiLCJleHAiOjE1NjE0NjcyMjEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6MTU3NjYiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjE1NzY2In0.ZtQY3C3YYG7NDJi2phG8HT0Nv9ObTCcGr8bIioNvwq8');
>>>>>>> fb9a2e4f4be8f913b80b4e7570db5f8dd2a1f688
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
<<<<<<< HEAD
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
=======
            <QuestionSideNav />
            <Switch>
              <Route path="/exam" component={Exam} />
              <Route path="/exams/add" component={AddExam} />
              <Redirect from="/home" to="/" />
              <Route path="/register" exact component={Register} />
              <Route path="/CreateQuestion" exact component={CreateQuestion} />
              <Route path="/login" exact component={Login} />
              <Route path="/logout" exact component={Logout} />
              <Route path="/CreateQuestion/CreateChoiseQuestion" exact component={CreateChoiseQuestion} />
              <Route path="/CreateQuestion/CreateComprehenssionQuestion" exact component={CreateComprehenssionQuestion} />
              <Route path="/CreateQuestion/CreateEssayQuestion" exact component={CreateEssayQuestion} />
              <Route path="/CreateQuestion/CreateFillInTheBlankQuestion" exact component={CreateFillInTheBlankQuestion} />
              <Route path="/CreateQuestion/CreateMatchingQuestion" exact component={CreateMatchingQuestion} />
              <Route path="/CreateQuestion/CreateTrueOrFalseQuestion" exact component={CreateTrueOrFalseQuestion} />
              <Route path="/CreateQuestion/CreateImportQuestion" exact component={CreateImportQuestion} />
              <Route path="/PoolOfQuestions" exact component={PoolOfQuestions} />
              <Route path="/" exact component={AddOrganization} />

              <Route path="/" exact render={() => { return "Home Sweet Home" }} />
          <UserList />
              <Route render={() => { return "not found!!!" }} />
            </Switch>
          </div>
          <OrganizationsList></OrganizationsList>

         
>>>>>>> fb9a2e4f4be8f913b80b4e7570db5f8dd2a1f688
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
