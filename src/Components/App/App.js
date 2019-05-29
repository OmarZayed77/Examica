import React from 'react';
import 'element-theme-default';
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import AddExam from '../../Containers/exams/exam-add'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/exams/add" component={AddExam}/>
        <Redirect from="/home" to="/"/>
        <Route path="/" exact render={()=>{return "Home Sweet Home"}}/>
        <Route render={()=>{return "not found!!!"}}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
