import React from 'react';
import 'element-theme-default';
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Home from '../Button'
import Register from '../../Containers/Account/Register'
import Login from '../../Containers/Account/Login'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from="/home" to="/"/>
        <Route path="/" exact component={Home}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/login" exact component={Login}/>
        <Route render={()=>{return "not found!!!"}}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
