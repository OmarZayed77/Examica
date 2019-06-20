import React from "react";
import { Layout, Button } from "element-react/next";
import "./Slider.css";
import {withRouter} from 'react-router-dom';

const Slider = (props) => {
  const takeATour = () => {
    props.history.push("/");
  }
  const freeTrial = () => {
    props.history.push("organization/buy");
  }
  return (
    <div>
      <Layout.Row className="Slider ">
        <div className="wraper">
          <h2>Online Exam Builder</h2>
          <p>
            Creating online exams & tests will be like a piece of cake <br />{" "}
            with our easy to use website.
          </p>
          <div className="buttons">
            <Button className="Buttonprimary" onClick={freeTrial}>Free Trial</Button>
            <Button className="Buttonsecondry" onClick={takeATour}>Take a tour</Button>
          </div>
          <div className="background-1" />
        </div>
      </Layout.Row>
    </div>
  );
};

export default withRouter(Slider);
