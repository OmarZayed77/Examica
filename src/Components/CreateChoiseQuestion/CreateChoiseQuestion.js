import React, { Component } from "react";
import {
  Form,
  Input,
  Checkbox,
  Button,
  Select,
  Radio,
  Switch,
  InputNumber
} from "element-react/next";
import { Rate } from "element-react";
import "./CreateChoiseQuestion.css";
import { Layout } from "element-react/next";

class CreateMultipleChoiseQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        Title: "",
        Type: "",
        Level: null,
        Mark: null,
        IsPublic: false,
        Options: [],
        OrganizationId: null
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur"
          }
        ],
        region: [
          {
            required: true,
            message: "Please select Activity zone",
            trigger: "change"
          }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "Please pick a date",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "Please pick a time",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "Please select at least one activity type",
            trigger: "change"
          }
        ],
        resource: [
          {
            required: true,
            message: "Please select activity resource",
            trigger: "change"
          }
        ],
        desc: [
          {
            required: true,
            message: "Please input activity form",
            trigger: "blur"
          }
        ]
      },
      choiceType: "Multi Choices"
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

  render() {
    var answerOptions = null;
    let radio = (
      <Form.Item prop="Options">
        <Radio.Group
          value={this.state.form.Options}
          onChange={this.onChange.bind(this, "Options")}
        >
          <Radio value="Sponsor" />
          <Radio value="Venue" />
        </Radio.Group>
      </Form.Item>
    );

    let checks = (
      <Form.Item prop="Options">
        <Checkbox.Group
          value={this.state.form.Options}
          onChange={this.onChange.bind(this, "Options")}
        >
          <Checkbox label="Online activities" name="Options" />
          <Button type="primary" icon="delete" />
          <Checkbox label="Promotion activities" name="Options" />
          <Button type="primary" icon="delete" />
          <Checkbox label="Offline activities" name="Options" />
        </Checkbox.Group>
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
        <Form.Item>
          <Button type="primary" onClick={this.handleSubmit.bind(this)}>
            Create
          </Button>
          <Button onClick={this.handleReset.bind(this)}>Reset</Button>
        </Form.Item>
        <Form.Item label={qType[qType.length - 2]} prop="Title">
          <Layout.Row gutters={10}>
            <Layout.Col span={15}>
              <Input
                className="CreateMultipleChoiseQuestion-Title"
                value={this.state.form.Title}
                onChange={this.onChange.bind(this, "Title")}
                placeholder="Please Type Your Question Here"
              />
            </Layout.Col>
            <Layout.Col span={3}>
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
              <Rate
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
              <Button type="primary" icon="plus">
                Add New Option
              </Button>
            </Form.Item>
          </Layout.Col>
        </Layout.Row>

        <Layout.Row>
          <Layout.Col span={5}>
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
          <Layout.Col span={2}>
            <label>Question Privacy</label>
          </Layout.Col>
          <Layout.Col span={2}>
            <Form.Item prop="IsPublic">
              <Switch
                value={this.state.form.IsPublic}
                onChange={this.onChange.bind(this, "IsPublic")}
              />
            </Form.Item>
          </Layout.Col>
        </Layout.Row>
      </Form>
    );
  }
}

export default CreateMultipleChoiseQuestion;
