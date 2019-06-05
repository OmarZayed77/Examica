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

class App extends Component {

  componentDidMount() {

    if (localStorage.getItem("token")) {
      this.props.setToken(localStorage.getItem("token"));
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <QuestionSideNav />
            <Switch>
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
              <Route path="/" exact component={AddOrganization} />
              <Route path="/" exact render={() => { return "Home Sweet Home" }} />
              <Route render={() => { return "not found!!!" }} />
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setToken: (token) => dispatch(setToken(token))
  };
};
const mapStateToProps = state => {
  return {

    userData: state.auth.userData
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

