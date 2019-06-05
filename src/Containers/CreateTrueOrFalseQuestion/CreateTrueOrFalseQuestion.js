import React, { Component } from "react";
import { Layout, Button, Input, Radio, Form, InputNumber, Switch } from 'element-react/next';
import { Rate } from 'element-react';
import { connect } from "react-redux";
import * as questionActions from "../../Store/Actions/questionActions";

import './CreateTrueOrFalseQuestion.css'

class CreateTrueOrFalseQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addQuestion: {
        Title: "",
        Type: "",
        Level: null,
        Mark: null,
        IsPublic: false,
        Options: [],
        OrganizationId: 3,
      },
     
    }
  }

  changeHandlerTitle = (e) => {
    const addquestion = { ...this.state.addQuestion };
    addquestion.Title = e;
    console.log(addquestion);
    this.setState({ addQuestion: addquestion });
  }

  changeHandlerRate = (e) => {
    const addquestion = { ...this.state.addQuestion };
    addquestion.Level = e;
    this.setState({ addQuestion: addquestion })
  }

  changeHandlerInputNumber = (e) => {
    const addquestion = { ...this.state.addQuestion };
    addquestion.Mark = e;
    this.setState({ addQuestion: addquestion })
  }

  changeHandlerIsPublic = (e) => {
    const addquestion = { ...this.state.addQuestion };
    addquestion.IsPublic = e;
    this.setState({ addQuestion: addquestion })
  }

  onChange(value) {
    const addquestion = { ...this.state.addQuestion };
    addquestion.Options = value;
    this.setState({ addQuestion: addquestion });
  }


  onAddTrueOrFalseQuestion = (e) => {
    this.props.onAddQuestion(this.state.addQuestion)
  }

  render() {
    console.log(this.state);
    return (
      <fragment className="CreateTrueOrFalseQuestion" >
        <Layout.Row lg="10" >
          <Layout.Col span="24"><div className="grid-content bg-purple-dark"></div>
            <h3>Examica</h3>
            <div className="intro-block">
              <div className="block">
                <span className="wrapper">
                  <Button type="success" onClick={this.onAddTrueOrFalseQuestion}>Done</Button>
                  <Button type="primary" className="primary">Preview</Button>
                  <Button type="text" className="textButton">Share</Button>
                  <i class="fas fa-share-alt"></i>
                  <Button type="text" className="textButton2">Settings</Button>
                  <i class="fas fa-cog"></i>
                  <Button type="text" className="textButton3">Create</Button>
                  <i class="fas fa-pen"></i>
                </span>
              </div>
            </div>
          </Layout.Col>
        </Layout.Row>


        <Layout.Row className="questionhead">
          <Layout.Col span="12"><div className="grid-content bg-purple-dark"></div>
            <Input placeholder="Is [Your Statment Here] True or False ?" onChange={this.changeHandlerTitle} />
            <div className="radios">
              <Radio value="True" checked={this.state.value === "True"} onChange={this.onChange.bind(this)}>True</Radio>
              <Radio className="optionB" value="False" checked={this.state.value === "Flase"} onChange={this.onChange.bind(this)}>False</Radio>
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
              value={this.state.addQuestion.IsPublic}
              onText="Public"
              offText="Private"
              onChange={this.changeHandlerIsPublic.bind(this)}
              >
            </Switch>
          </Layout.Col>
        </Layout.Row>
      </fragment>
    )
  }
};


const mapStateToProps = state => {
  return {
    token: state.authReducer.token
  }
} 

const mapDispatchToProps = dispatch => {
  return {
    onAddQuestion: (question, token) => {dispatch(questionActions.addTrueOrFalseQuestion(question, token))}
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(CreateTrueOrFalseQuestion);
