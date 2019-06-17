import React, { Component } from 'react';
import { Button, Table } from "element-react/next";
import { connect } from 'react-redux'
import './PoolOfQuestions.css'

class PoolOfQuestions extends Component {
  state = {
    columns: [
      {
        label: "Title",
        prop: "title",
        width: 300,
        render: function (data) {
          return (
            <span>{data.title}</span>
          )
        }
      },
      {
        label: "Level",
        prop: "level",
        width: 130,
        render: function (data) {
          return <span>{data.level}</span>
        }
      },
      {
        label: "Type",
        prop: "type",
        width: 180,
        render: function (data) {
          return <span>{data.type}</span>
        }
      },
      {
        label: "Mark",
        prop: "mark",
        width: 100,
        render: function (data) {
          return <span>{data.mark}</span>
        }
      },
      {
        label: "IsPublic",
        prop: "isPublic",
        width: 100,
        render: function (data) {
          return <span>{data.isPublic}</span>
        }
      },
      {
        label: "Operations",
        width: 180,
        render: function () {
          return (
            <span>
              <Button className="questionOptions" icon="view" size="small"></Button>
              <Button className="questionOptions" icon="edit" size="small"></Button>
              <Button className="questionOptions" icon="delete" size="small"></Button>
            </span>
          )
        }
      }
    ],
    data: []
  }

  componentDidMount(){
    this.setState({
      data: this.props.questionsPool
    })
  }


  render() {
    // let questionsTable = null;
    // if(this.props.questions)
    return (
      <Table
        style={{ width: '100%' }}
        columns={this.state.columns}
        data={this.state.data}
        border={true}
        fit={true}
      //highlightCurrentRow={true}
      //onCurrentChange={item => { console.log(item) }}
      />
    )
  }
}


const mapStateToProps = state => {
  return ({
    questionsPool: state.questions.questions
  })
};
const mapDispatchToProps = dispatch => {
  return ({})
};
export default connect(mapStateToProps, mapDispatchToProps)(PoolOfQuestions);
