import React, { Component } from 'react';
import { Button, Table, MessageBox, Message } from "element-react/next";
import { connect } from 'react-redux';
import './PoolOfQuestions.css';
import { deleteQuestion } from '../../Store/Actions/questionActions'

class PoolOfQuestions extends Component {

  state = {
    columns: [
      {
        label: "Title",
        prop: "Title",
        width: 280,
        render: function (data) {
          return (
            <span>{data.Title}</span>
          )
        }
      },
      {
        label: "Level",
        prop: "Level",
        width: 130,
        render: function (data) {
          return <span>{data.Level}</span>
        }
      },
      {
        label: "Type",
        prop: "Type",
        width: 180,
        render: function (data) {
          return <span>{data.Type}</span>
        }
      },
      {
        label: "Mark",
        prop: "Mark",
        width: 80,
        render: function (data) {
          return <span>{data.Mark}</span>
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
        width: 245,
        render: (data) => {
          return (
            <span>
              <Button className="questionOptions" icon="view" size="small"></Button>
              <Button className="questionOptions" icon="edit" size="small"></Button>
              <Button className="questionOptions" icon="delete" size="small" onClick={this.deleteQuestion.bind(this, data.id)}></Button>
            </span>
          )
        }
      }
    ],
    data: []
  }


  componentDidMount() {
    this.setState({
      data: this.props.questionsPool
    })
  }

  deleteQuestion(id) {
    MessageBox.confirm('Are you sure you want to delete?', 'Warning', {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning'
    }).then(() => {
      Message({
        type: 'success',
        message: 'Deleted Successfully'
      });
      this.props.delete(id)
    }).catch(() => {
      Message({
        type: 'info',
        message: 'Failed to delete'
      });
    });
  }
  render() {
    return (
      <Table
        style={{ width: '100%' }}
        columns={this.state.columns}
        data={this.props.List}
        border={true}
        fit={true}
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
  return ({
    delete: (id) => dispatch(deleteQuestion(id))
    
  });
}
export default connect(mapStateToProps, mapDispatchToProps)(PoolOfQuestions);
