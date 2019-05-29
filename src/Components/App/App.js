import React from 'react';
import 'element-theme-default';
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
<<<<<<< HEAD
import AddExam from '../../Containers/exams/exam-add'
=======
import CreateQuestions from '../../Containers/Questions-list';
import Register from '../../Containers/Account/Register'
import Login from '../../Containers/Account/Login'
>>>>>>> e81590e9097b68181de39dc0bcaf93d23b56d493

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/exams/add" component={AddExam}/>
        <Redirect from="/home" to="/"/>
<<<<<<< HEAD
        <Route path="/" exact render={()=>{return "Home Sweet Home"}}/>
=======
        {/* <Route path="/" exact component={Home}/> */}
        <Route path="/register" exact component={Register}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/CreateQuestions" exact component={CreateQuestions}/>
>>>>>>> e81590e9097b68181de39dc0bcaf93d23b56d493
        <Route render={()=>{return "not found!!!"}}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
