import React from 'react';
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import 'element-theme-default';
import Home from '../../Pages/Home'
import Navbar from '../Navbar';


function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Switch>
        <Redirect from="/home" to="/"/>
        <Route path="/" exact component={Home}/>
        <Route render={()=>{return "not found!!!"}}/>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
