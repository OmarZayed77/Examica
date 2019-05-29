import React from 'react';
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import 'element-theme-default';
import Home from '../../Pages/Home'
import Navbar from '../Navbar';
import Register from '../../Containers/Account/Register'
import QuestionSideNave from '../../Containers/QuestionSideNav';
import AddExam from '../../Containers/exams/exam-add'
import CreateQuestions from '../../Containers/Questions-list';
import Login from '../../Containers/Account/Login'


function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
     <div className="App">
       <div className="container">
      <Switch>
        <Route path="/exams/add" component={AddExam}/>
        <Redirect from="/home" to="/"/>
        <Route path="/register" exact component={Register}/>
        <Route path="/QuestionSideNav" exact component={QuestionSideNave}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/CreateQuestions" exact component={CreateQuestions}/>
        <Route path="/" exact component={Home}/>
        <Route render={()=>{return "not found!!!"}}/>
      </Switch>
      </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
