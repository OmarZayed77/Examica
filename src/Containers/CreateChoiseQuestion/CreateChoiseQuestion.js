import React, { Component } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  Switch,
  Checkbox,
  Radio,
  InputNumber
} from "element-react/next";
import { Rate } from "element-react";
import "./CreateChoiseQuestion.css";
import { Layout } from "element-react/next";
import { connect } from "react-redux";
import * as questionActions from "../../Store/Actions/questionActions";

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
        Level: [
          {
            required: true,
            message: "Please input the Question Difficulty level",
            trigger: "blur"
          }
        ],
        Mark: [
          {
            required: true,
            type: "number",
            message: "Please input the Exam Mark",
            trigger: "blur"
          }
        ]
      },
      isChecked: false,
      choiceType: "Multi Choices",
      optionsNumb: [1]
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.refs.form.validate(valid => {
      if (valid) {
        this.props.onAddQuestion(this.state.form, this.props.token);
      } else {
        console.log("error submit!!");
        return false;
      }
    });
  }

  handleReset(e) {
    e.preventDefault();
    this.refs.form.resetFields();
    this.setState({
      form: {
        Title: "",
        Type: "",
        Level: null,
        Mark: null,
        IsPublic: false,
        Options: [],
        OrganizationId: 2
      }
    });
    this.setState({
      Options: []
    });
  }

  onChange(key, value) {
    if (key === "choiceType") {
      this.setState({
        ...this.state,
        choiceType: value
      });
    } else {
      this.setState({
        form: Object.assign({}, this.state.form, { [key]: value })
      });
    }
  }

  getOptionsType() {
    let answerOptions = null;
    if (this.state.choiceType === "Multi Choices") {
      answerOptions = this.state.optionsNumb.map(opt => (
        <Layout.Row key={opt}>
          <Layout.Col span={1}>
            <Checkbox
              checked={this.state.isChecked}
              onChange={this.onCheckedBox.bind(this, opt)}
            />
          </Layout.Col>
          <Layout.Col xs={9} sm={15} md={10} lg={10}>
            <Input id={"option" + opt} />
          </Layout.Col>
          <Layout.Col span={1}>
            <Button
              onClick={this.onOptionDeleted.bind(this, opt)}
              type="primary"
              icon="delete"
            />
          </Layout.Col>
        </Layout.Row>
      ));
    } else {
      answerOptions = this.state.optionsNumb.map(opt => (
        <Layout.Row key={opt}>
          <Layout.Col span={1}>
            <Radio value="" />
          </Layout.Col>
          <Layout.Col xs={9} sm={15} md={10} lg={10}>
            <Input id={"option" + opt} />
          </Layout.Col>
          <Layout.Col span={1}>
            <Button
              onClick={this.onOptionDeleted.bind(this, opt)}
              type="primary"
              icon="delete"
            />
          </Layout.Col>
        </Layout.Row>
      ));
    }
    return answerOptions;
  }

  onAddOption() {
    let addOption = [...this.state.optionsNumb];
    addOption.push(parseInt(this.state.optionsNumb.length) + 1);
    this.setState({
      optionsNumb: addOption
    });
  }

  onOptionDeleted(optNumb, event) {
    let optionsNum = [...this.state.optionsNumb];
    let index = optionsNum.findIndex(i => i === optNumb);
    optionsNum.splice(index, 1);
    this.setState({
      optionsNumb: optionsNum
    });
  }

  onCheckedBox(optNumb, event) {
    let value = document.getElementById("option" + optNumb).value;
    let options = [...this.state.form.Options];
    if (event) options.push({ name: value });
    else {
      let opt = options.findIndex(opt => opt.name === value);
      options.splice(opt, 1);
    }
    this.setState({
      isChecked: event,
      form: {
        ...this.state.form,
        Options: options
      }
    });
  }

  componentDidMount() {
    var qType = this.props.history.location.pathname.split("/");
    this.setState({
      form: {
        ...this.state.form,
        Type: qType[qType.length - 2]
      }
    });
  }

  render() {
    console.log("Rendered!");
    let answerOptions = this.getOptionsType();
    console.log(this.state);
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
            <Layout.Col span={20}>
              <label className="CreateMultipleChoiseQuestion-Question-type">
                {this.state.form.Type}
              </label>
            </Layout.Col>
          </Layout.Row>

          <Layout.Row>
            <Layout.Col span={15}>
              <Input
                className="CreateMultipleChoiseQuestion-Title"
                value={this.state.form.Title}
                onChange={this.onChange.bind(this, "Title")}
                placeholder="Please Type Your Question Here"
              />
            </Layout.Col>

            <Layout.Col span={2} offset={1}>
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

        <Form.Item>
          <label className="CreateMultipleChoiseQuestion-level-label">
            Question Level Of Difficulty
          </label>
          <Rate
            onChange={this.onChange.bind(this, "Level")}
            showText={true}
            texts={["easy", "easy", "intermidiate", "intermidiate", "advanced"]}
          />
        </Form.Item>
        <Form.Item>
          <div id="extraOption">{answerOptions}</div>
        </Form.Item>

        <Form.Item>
          <Button onClick={() => this.onAddOption()} type="primary" icon="plus">
            Add New Option
          </Button>
        </Form.Item>

        <Layout.Row>
          <Layout.Col xs={11} sm={12} md={8} lg={8}>
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
            xs={5}
            sm={7}
            md={7}
            lg={4}
            prop="IsPublic"
          >
            <label className="CreateMultipleChoiseQuestion-Question-type">
              Question Privacy
            </label>
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

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAddQuestion: (question, token) => {
      dispatch(questionActions.addNewQuestion(question, token));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMultipleChoiseQuestion);