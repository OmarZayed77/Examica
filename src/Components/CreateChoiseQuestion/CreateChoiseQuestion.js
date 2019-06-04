import React, { Component } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  Switch,
  InputNumber
} from "element-react/next";
import { Rate } from "element-react";
import "./CreateChoiseQuestion.css";
import { Layout } from "element-react/next";

class CreateMultipleChoiseQuestion extends Component {
  constructor(props) {
    super(props);
    this.state={
      form: {
        Title:"",
        Type:"",
        Level:null,
        Mark: null,
        IsPublic: false,
        Options: [],
        OrganizationId: 2
      },
      rules: {
        Title: [
          {
            required: true,
            message: "Please input Question Title",
            trigger: "blur"
          }
        ],
        Options: [
          {
            type: "array",
            required: true,
            message: "Please select at least one Correct answer",
            trigger: "change"
          }
        ],
        Mark: [
          {
            required: true,
            message: "Please input activity form",
            trigger: "blur"
          }
        ]
      },
      choiceType: "Multi Choices",
      Options: []
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.refs.form.validate(valid => {
      if (valid) {
        alert("submit!");
      } else {
        console.log("error submit!!");
        return false;
      }
    });
  }

  handleReset(e) {
    e.preventDefault();

    this.refs.form.resetFields();
  }

  onChange(key, value) {
    this.setState({
      form: Object.assign({}, this.state.form, { [key]: value })
    });
  }

  onAddOption() {
    var check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.setAttribute("name", "Options");

    var checkInput = document.createElement("input");
    checkInput.setAttribute("type", "Options");

    var btn = document.createElement("Button")
    btn.setAttribute("type","primary")
    btn.setAttribute("icon","delete")
    
    var x = document.getElementById("section");
    check.append(x);
    checkInput.append(x);
    btn.append(x)
    console.log(x);
  }
  render() {
    console.log(this.state);

    var answerOptions = null;
    let radio = (
      <Form.Item prop="Options">
        <input type="radio" name="Options" />
      </Form.Item>
    );

    let checks = (
      <Form.Item prop="Options">
        <div id="section">
          <Layout.Row gutters={5}>
            <Layout.Col span={1}>
              <input type="checkbox" name="Options" />
            </Layout.Col>
            <Layout.Col span={7}>
              <Input onChange={this.onChange.bind(this, "Options")} />
            </Layout.Col>
            <Layout.Col span={1} offset={1}>
              <Button type="primary" icon="delete" />
            </Layout.Col>
          </Layout.Row>
        </div>
      </Form.Item>
    );

    if (this.state.choiceType === "Multi Choices") answerOptions = checks;
    else answerOptions = radio;
    var qType = this.props.history.location.pathname.split("/");

    return (
      <Form
        ref="form"
        className="en-US CreateMultipleChoiseQuestion"
        model={this.state.form}
        rules={this.state.rules}
        labelWidth="120"
      >
        <Form.Item className="CreateMultipleChoiseQuestion-form-controles">
          <Button type="primary" onClick={this.handleSubmit.bind(this)}>
            Create
          </Button>
          <Button onClick={this.handleReset.bind(this)}>Reset</Button>
        </Form.Item>
        <Form.Item prop="Title">
          <Layout.Row>
            <Layout.Col>
              <label className="CreateMultipleChoiseQuestion-Question-type">
                {qType[qType.length - 2]}
              </label>
            </Layout.Col>
          </Layout.Row>
          <Layout.Row gutters={10}>
            <Layout.Col span={15}>
              <Input
                className="CreateMultipleChoiseQuestion-Title"
                value={this.state.form.Title}
                onChange={this.onChange.bind(this, "Title")}
                placeholder="Please Type Your Question Here"
              />
            </Layout.Col>
            <Layout.Col span={3} offset={1}>
              <label className="CreateMultipleChoiseQuestion-Mark">
                Question Mark
              </label>
            </Layout.Col>
            <Layout.Col span={3}>
              <InputNumber
                className="CreateMultipleChoiseQuestion-NumberInput"
                defaultValue={0}
                onChange={this.onChange.bind(this, "Mark")}
                min="1"
                max="100"
              />
            </Layout.Col>
          </Layout.Row>
        </Form.Item>

        <Layout.Row>
          <Layout.Col>
            <Form.Item>
              <label className="CreateMultipleChoiseQuestion-level-label">
                Question Level Of Difficulty
              </label>
              <Rate
                onChange={this.onChange.bind(this, "Level")}
                showText={true}
                texts={[
                  "easy",
                  "easy",
                  "intermidiate",
                  "intermidiate",
                  "advanced"
                ]}
              />
            </Form.Item>
          </Layout.Col>
          <Layout.Col>{answerOptions}</Layout.Col>
        </Layout.Row>

        <Layout.Row>
          <Layout.Col>
            <Form.Item>
              <Button
                onClick={() => this.onAddOption()}
                type="primary"
                icon="plus"
              >
                Add New Option
              </Button>
            </Form.Item>
          </Layout.Col>
        </Layout.Row>

        <Layout.Row>
          <Layout.Col span={8}>
            <Form.Item prop="choiceType">
              <Select
                value={this.state.choiceType}
                onChange={this.onChange.bind(this, "choiceType")}
              >
                <Select.Option label="Multi Choices" value="Multi Choices" />
                <Select.Option label="Single Choice" value="Single Choice" />
              </Select>
            </Form.Item>
          </Layout.Col>
          <Layout.Col
            className="CreateMultipleChoiseQuestion-privacy"
            span={5}
            offset={1}
            prop="IsPublic"
          >
            <label>Question Privacy</label>
            <Switch
              onText="Private"
              offText="Public"
              value={this.state.form.IsPublic}
              onChange={this.onChange.bind(this, "IsPublic")}
            />
          </Layout.Col>
        </Layout.Row>
      </Form>
    );
  }
}

export default CreateMultipleChoiseQuestion;
