import React from 'react';
import 'element-theme-default';
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import AddExam from '../../Containers/exams/exam-add'
import Register from '../../Containers/Account/Register'
import Login from '../../Containers/Account/Login'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/exams/add" component={AddExam}/>
        <Redirect from="/home" to="/"/>
        <Route path="/register" exact component={Register}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/" render={()=>{return "Home Sweet Home"}}/>
        <Route render={()=>{return "not found!!!"}}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
