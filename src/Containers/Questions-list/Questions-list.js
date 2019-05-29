import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'element-react/next';
import QuestionButton from "../../Components/QuestionButton";
import './Questions-list.css';

class QuestionsList extends Component {

  state = {
    questionButtons: [
      {
        id: 1,
        name: "Multiple Choise",
        icon: "fas fa-dot-circle",
        type: 'Multiple Choise'
      },
      {

        id: 2,
        name: "Checkbox",
        icon: "fas fa-check-square",
        type: 'Checkbox'
      },
      {

        id: 3,
        name: "TrueOrFalse",
        icon: "fas fa-times-circle",
        type: 'TrueOrFalse'

      },
      {

        id: 4,
        name: "FillInTheBlank",
        icon: "fas fa-fill-drip",
        type: 'FillInTheBlank'

      },
      {

        id: 5,
        name: "Matching",
        icon: "fas fa-random",
        type: 'Matching'

      },
      {

        id: 6,
        name: "Essay",
        icon: "fas fa-align-justify",
        type: 'Essay'

      },
      {

        id: 7,
        name: "Comprehenssion",
        icon: "fas fa-align-center",
        type: 'Comprehenssion'

      },
      {

        id: 8,
        name: "Import quesstions",
        icon: "fas fa-file-import",
        type: 'Import quesstions'

      },

    ]
  }
  render() {
    const questionButton = this.state.questionButtons.map(btn => {
      return (
      <Layout.Col span="10" offset="1">
      <QuestionButton
        id={btn.id}
        name={btn.name}
        icon={btn.icon}
        className="questionlist"
        />
        </Layout.Col>
      );
    });
    return (
      <Layout.Row className="QuestionList">
        {questionButton}
      </Layout.Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    questionbuttons: state.questionbuttons
  };
};
export default connect(mapStateToProps, null)(QuestionsList);
