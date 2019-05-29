import React from 'react';
import 'element-theme-default';
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
//import Home from '../why-to-use/why-to-use';
import FeatureCard from '../feature-card/feature-card';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from="/home" to="/"/>
        <Route path="/" exact component={FeatureCard}/>
        <Route render={()=>{return "not found!!!"}}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
