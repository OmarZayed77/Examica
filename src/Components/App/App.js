import React from 'react';
import 'element-theme-default';
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
//import Home from '../why-to-use/why-to-use';
import FeatureCard from '../feature-card/feature-card';
import AddExam from '../../Containers/exams/exam-add'
import CreateQuestions from '../../Containers/Questions-list';
import Register from '../../Containers/Account/Register'
import Login from '../../Containers/Account/Login'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/exams/add" component={AddExam}/>
        <Redirect from="/home" to="/"/>
        <Route path="/" exact component={FeatureCard}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/CreateQuestions" exact component={CreateQuestions}/>
        <Route render={()=>{return "not found!!!"}}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
