import React from 'react';
import 'element-theme-default';
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
<<<<<<< HEAD
//import Home from '../why-to-use/why-to-use';
import FeatureCard from '../feature-card/feature-card';
=======
import Register from '../../Containers/Account/Register'
import QuestionSideNave from '../../Containers/QuestionSideNav';
>>>>>>> fac506ea9ed66e40b97553dd8f82a63f7aabe90d
import AddExam from '../../Containers/exams/exam-add'
import CreateQuestions from '../../Containers/Questions-list';
import Login from '../../Containers/Account/Login'

function App() {
  return (
    <BrowserRouter>
     <div className="App">
       <div className="container">
      <Switch>
        <Route path="/exams/add" component={AddExam}/>
        <Redirect from="/home" to="/"/>
<<<<<<< HEAD
        <Route path="/" exact component={FeatureCard}/>
=======
>>>>>>> fac506ea9ed66e40b97553dd8f82a63f7aabe90d
        <Route path="/register" exact component={Register}/>
        <Route path="/QuestionSideNave" exact component={QuestionSideNave}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/CreateQuestions" exact component={CreateQuestions}/>
<<<<<<< HEAD
=======
        <Route path="/" exact render={()=>{return "Home Sweet Home"}}/>
>>>>>>> fac506ea9ed66e40b97553dd8f82a63f7aabe90d
        <Route render={()=>{return "not found!!!"}}/>
      </Switch>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
