import React, { Component } from "react";
import { Layout, Button, Input, Radio, InputNumber, Switch } from 'element-react/next';
import { Rate } from 'element-react';
import { connect } from "react-redux";
import * as questionActions from "../../Store/Actions/questionActions";

import './CreateTrueOrFalseQuestion.css'

class CreateTrueOrFalseQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: {
        Title: "",
        Type: "",
        Level: null,
        Mark: null,
        IsPublic: false,
        Options: [{name: ""}],
        OrganizationId: 3,
      },
    }
  }

  changeHandlerTitle = (e) => {
    const addquestion = { ...this.state.question };
    addquestion.Title = e;
    this.setState({ question: addquestion });
  }

  changeHandlerRate = (e) => {
    const addquestion = { ...this.state.question };
    addquestion.Level = e;
    this.setState({ question: addquestion })
  }

  changeHandlerInputNumber = (e) => {
    const addquestion = { ...this.state.question };
    addquestion.Mark = e;
    this.setState({ question: addquestion })
  }

  changeHandlerIsPublic = (e) => {
    const addquestion = { ...this.state.question };
    addquestion.IsPublic = e;
    this.setState({ question: addquestion })
  }

  onChange(value) {
    console.log(value);
    const addquestion = { ...this.state.question };
    addquestion.Options = [{name: value}];
    this.setState({ question: addquestion });
  }


  onAddTrueOrFalseQuestion = (e) => {
    this.props.onAddQuestion(this.state.question , this.props.token);
  }

  render() {
    console.log(this.state)
    return (
      <div className="CreateTrueOrFalseQuestion" >
        <Layout.Row lg="10" >
          <Layout.Col span="24"><div className="grid-content bg-purple-dark"></div>
            <h3>Examica</h3>
            <div className="intro-block">
              <div className="block">
                <span className="wrapper">
                  <Button type="success" onClick={this.onAddTrueOrFalseQuestion}>Done</Button>
                  <Button type="primary" className="primary">Preview</Button>
                  <Button type="text" className="textButton">Share</Button>
                  <i className="fas fa-share-alt"></i>
                  <Button type="text" className="textButton2">Settings</Button>
                  <i className="fas fa-cog"></i>
                  <Button type="text" className="textButton3">Create</Button>
                  <i className="fas fa-pen"></i>
                </span>
              </div>
            </div>
          </Layout.Col>
        </Layout.Row>


        <Layout.Row className="questionhead">
          <Layout.Col span="12"><div className="grid-content bg-purple-dark"></div>
            <Input placeholder="Is [Your Statment Here] True or False ?" onChange={this.changeHandlerTitle}/>
            <div className="radios">
              <Radio value="True" checked={this.state.question.Options[0].name === "True"} onChange={this.onChange.bind(this)}>True</Radio>
              <Radio value="False" className="optionB" checked={this.state.question.Options[0].name === "False"} onChange={this.onChange.bind(this)}>False</Radio>
            </div>
          </Layout.Col>
        </Layout.Row>
        <Layout.Row>
          <Layout.Col span="12">
            <label className="level">Question Level Of Difficulty</label>
            <Rate
              className="rate"
              onChange={this.changeHandlerRate.bind(this)}
              showText={true}
              texts={["easy", "easy", "intermidiate", "intermidiate", "advanced"]}
            />

            <Layout.Col span="12">
              <label className="Mark">Question Mark</label>
              <InputNumber className="NumberInput" defaultValue={0} onChange={this.changeHandlerInputNumber.bind(this)} min="1" max="100"></InputNumber>
            </Layout.Col>

            <label className="IsPuplic">Question Privacy</label>
            <Switch
              className="switch"
              value={this.state.question.IsPublic}
              onText="Public"
              offText="Private"
              onChange={this.changeHandlerIsPublic.bind(this)}
              >
            </Switch>
          </Layout.Col>
        </Layout.Row>
      </div>
    )
  }
};


const mapStateToProps = state => {
  return {
    token: state.auth.token
  }
} 

const mapDispatchToProps = dispatch => {
  return {
    onAddQuestion: (question, token) => {dispatch(questionActions.addNewQuestion(question, token))}
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(CreateTrueOrFalseQuestion);
