import React, { Component } from 'react';
import {connect} from 'react-redux';
import FeatureCard from '../../Components/feature-card';

class FeatureCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: [
        {
          id:1,
          image: "https://i.ibb.co/vqMc6pP/undraw-time-management-30iu.png",
          title: "Timed exams",
          content: `set a time for how long you expect a question to be answered
          that will help you keep a timeframe for the hole exam.`
        },
        {
          id:2,
          image: "https://i.ibb.co/qkzcQJV/undraw-segmentation-uioo.png",
          title: "Powerful reports",
          content: `get reports with the exam results, the success and failure
          percentage of the examinees.`
        },
        {
          id:3,
          image: "https://i.ibb.co/SnLQPMY/undraw-questions-75e0.png",
          title: "Multiple question types",
          content: `build your exam in the easiest way with just dragging the 
          question and dropping it. you can add now images as well to 
          your question title.`
        },
        {
          id:4,
          image: "https://i.ibb.co/PryYFyd/undraw-world-9iqb.png",
          title: "Access anywhere",
          content: `you can access the website from laptops mobiles and 
          tablets it will always make the best fit.`
        },
        {
          id:5,
          image: "https://i.ibb.co/269GrBB/undraw-subscriber-vabu.png",
          title: "Custom email invites",
          content: `send the people you would like them to join your account 
          an invitation so that you can assign some roles to them and 
          start your business.`
        },
        {
          id:6,
          image: "https://i.ibb.co/K5kvg0s/undraw-security-o890.png",
          title: "Secured with SSL encryption",
          content: `build your exam in the easiest way with just dragging the 
          question and dropping it. you can add now images as well to 
          your question title.`
        },
        {
          id:7,
          image: "https://i.ibb.co/j3pV3jQ/undraw-printing-invoices-5r4r.png",
          title: " Printing option",
          content: `you can access the website from laptops mobiles and 
          tablets it will always make the best fit.`
        },
        {
          id:8,
          image: "https://i.ibb.co/k4dLCjZ/undraw-confirmed-81ex.png",
          title: "Advanced configuration options",
          content: `you can access the website from laptops mobiles and 
          tablets it will always make the best fit.`
        },
      ]
    };
  }

 
  render() {
    var featrues = this.state.features.map()
    return ( <div>Hello</div>);
  }
}

export default FeatureCardList;
