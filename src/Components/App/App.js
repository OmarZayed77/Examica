import React from "react";
import "element-theme-default";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FeatureCardList from "../../Containers/feature-card-list/feature-card-list";
// import Register from "../../Containers/Account/Register";
// import QuestionSideNave from "../../Containers/QuestionSideNav";
// import AddExam from "../../Containers/exams/exam-add";
// import CreateQuestions from "../../Containers/Questions-list";
// import Login from "../../Containers/Account/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Switch>
            {/* <Route path="/exams/add" component={AddExam} /> */}
            <Route path="/" exact component={FeatureCardList} />
            {/* <Route path="/register" exact component={Register} />
            <Route
              path="/QuestionSideNave"
              exact
              component={QuestionSideNave}
            />
            <Route path="/login" exact component={Login} />
            <Route path="/CreateQuestions" exact component={CreateQuestions} />
            <Route
              render={() => {
                return "not found!!!";
              }}
            /> */}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
