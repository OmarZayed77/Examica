import React from 'react';
import 'element-theme-default';
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Register from '../../Containers/Account/Register'
import QuestionSideNave from '../../Containers/QuestionSideNav';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
       <div className="container">
      <Switch>
        <Redirect from="/home" to="/"/>
        {/* <Route path="/" exact component={Home}/> */}
        <Route path="/register" exact component={Register}/>
        <Route path="/QuestionSideNave" exact component={QuestionSideNave}/>
        <Route render={()=>{return "not found!!!"}}/>
      </Switch>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
