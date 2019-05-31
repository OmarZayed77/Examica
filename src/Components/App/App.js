import React from 'react';
import 'element-theme-default';
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Register from '../../Containers/Account/Register'
import CreateQuestion from '../../Components/CreateQuestion';
import AddExam from '../../Containers/exams/exam-add'
import CreateChoiseQuestion from '../../Components/CreateChoiseQuestion'
import CreateComprehenssionQuestion from '../../Components/CreateComprehenssionQuestion'
import CreateEssayQuestion from '../../Components/CreateEssayQuestion'
import CreateFillInTheBlankQuestion from '../../Components/CreateFillInTheBlankQuestion'
import CreateMatchingQuestion from '../CreateMatchingQuestion'
import CreateTrueOrFalseQuestion from '../../Components/CreateTrueOrFalseQuestion'
import CreateImportQuestion from '../CreateImportQuestion'
import Login from '../../Containers/Account/Login'
import QuestionSideNav from '../../Components/QuestionSideNav';
import AddOrgnization from '../../Containers/AddOrgnization';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
       <div className="container">
         <QuestionSideNav/>
      <Switch>
        <Route path="/exams/add" component={AddExam}/>
        <Redirect from="/home" to="/"/>
        <Route path="/register" exact component={Register}/>
        <Route path="/CreateQuestion" exact component={CreateQuestion}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/CreateQuestion/CreateChoiseQuestion" exact component={CreateChoiseQuestion}/>
        <Route path="/CreateQuestion/CreateComprehenssionQuestion" exact component={CreateComprehenssionQuestion}/>
        <Route path="/CreateQuestion/CreateEssayQuestion" exact component={CreateEssayQuestion}/>
        <Route path="/CreateQuestion/CreateFillInTheBlankQuestion" exact component={CreateFillInTheBlankQuestion}/>
        <Route path="/CreateQuestion/CreateMatchingQuestion" exact component={CreateMatchingQuestion}/>
        <Route path="/CreateQuestion/CreateTrueOrFalseQuestion" exact component={CreateTrueOrFalseQuestion}/>
        <Route path="/CreateQuestion/CreateImportQuestion" exact component={CreateImportQuestion}/>
      <Route path="/" exact component={AddOrgnization} />
        <Route path="/" exact render={()=>{return "Home Sweet Home"}}/>
        <Route render={()=>{return "not found!!!"}}/>
      </Switch>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
