import React, { Component } from 'react';
import Exam from '../../../Components/exams/exam'
import { Layout } from 'element-react/next';
import { connect } from 'react-redux';
import * as  examActions from '../../../Store/Actions/examActions'


class ExamList extends Component {
 constructor(props){
   super(props)

   this.state={
     exams:[]
   }
 }
 
  
  componentDidMount(){
    this.props.onGetAllExams();
  }

  render() {
    const examlist = this.props.exams.map((ex,index) => {
      return (
      <Layout.Col span={8} offset={0}>
      <Exam
        key={index}
        id={ex.id}
        name={ex.name}
        startdate={ex.startdate}
        endDate={ex.endDate}
        // numberOfQuestions={ex.questions.length}
        />
      </Layout.Col>
      );
    });
    return (
      <Layout.Row >
        {examlist}
      </Layout.Row>
    );
  }
}
const mapStateToProps = state =>{
     return{
        exams : state.exams
   }
}


const mapDispatchToProps = dispatch =>
{
  return{
    onGetAllExams : () => dispatch(examActions.get())
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (ExamList);
