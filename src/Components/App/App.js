import React from 'react';
import 'element-theme-default';
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Home from '../Button'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from="/home" to="/"/>
        <Route path="/" exact component={Home}/>
        <Route render={()=>{return "not found!!!"}}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
