import React, { Component } from 'react';
import Exam from '../../../Components/exams/exam'
import { Layout } from 'element-react/next';
import { connect } from 'react-redux';
import * as  examActions from '../../../Store/Actions/examActions'


class ExamList extends Component {
  componentDidMount(){
    if(this.props.token)
    {
      this.props.onGetAllExams(this.props.organizationId, this.props.token);
    }
    else this.props.onGetAllExams(this.props.organizationId, localStorage.getItem("token"));
  }

  render() {
    let examlist = null;
    if (this.props.exams.length > 0) 
    {
        examlist = this.props.exams.map((ex,index) => {
          return (
        <Layout.Col key={index} span={5} offset={1}>
        <Exam
          id={ex.id}
          name={ex.name}
          startDate={ex.startDateTime}
          endDate={ex.endDateTime}
          numberOfQuestions={ex.questions.length}
          />
        </Layout.Col>
        );
      });
    }
    return (
      <Layout.Row >
        {examlist}
      </Layout.Row>
    );
  }
}
const mapStateToProps = state =>{
     return{
        exams : state.exams,
        token: state.auth.token,
        organizationId: 1
   }
}


const mapDispatchToProps = dispatch =>
{
  return{
    onGetAllExams : (orgId, token) => dispatch(examActions.get(orgId, token))
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (ExamList);
