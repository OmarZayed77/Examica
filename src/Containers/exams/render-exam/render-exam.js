import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as examAPI from '../../../API/examsAPI';
import './render-exam.css';
import TrueOrFalse from '../../../Components/Questions/Render/TrueOrFalse';
import MCQ from '../../../Components/Questions/Render/MCQ';
import Complex from '../../../Components/Questions/Render/Complex/Complex';

class RenderExam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exam: {
        "id": "",
        "name": "",
        "mark": "",
        "startDateTime": "",
        "endDateTime": "",
        "questions": [],
        "complexQuestions": []
      }
    }
  }
  componentDidMount() {
    examAPI.getById(this.props.match.params.id, this.props.token)
    .then( res => {
        if(res.status === 200)
        {
          this.setState({
            exam: res.data
          });
        }
      }
    )
    .catch(console.error);
  }
  render() {
    const {exam} = this.state;
    const noOfQuestions= exam.questions.length;
    const noOfComplexs= exam.complexQuestions.length;
    let complexQuestions = exam.complexQuestions.map((cq, index) =><div key={cq.id}><Complex index={index+1} complex={cq}/><hr/> </div>);
    let questions = exam.questions.map((q, i) => {
      var question;
      switch(q.type) {
        case "TrueOrFalse":
          question = <TrueOrFalse key={q.id} index={i} question={q} />
            break;
        case "MCQ_SingleAnswer":
        case "MCQ_MultiAnswers":
          question = <MCQ key={q.id} index={i+noOfComplexs+1} question={q} />
          break;
        default:
          break;
      }
      return question;
    });
    return(
      <div className="RenderExam">
        <div className="RenderExam-Name">{exam.name}</div>
        <div className="RenderExam-Number">Number of Questions: {noOfComplexs + noOfQuestions}</div>
        {complexQuestions}
        {questions}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    token: state.auth.token
  }
} 

export default connect(mapStateToProps)(RenderExam);
