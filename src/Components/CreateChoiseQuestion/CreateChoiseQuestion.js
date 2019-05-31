import React, { Component } from "react";
import { Icon } from "element-react/next";
import { Form, Input, Checkbox, Button, Select } from "element-react/next";

class CreateMultipleChoiseQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        name: "",
        region: "",
        date1: null,
        date2: null,
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        option:[]
      }
    };
  }

  onSubmit(e) {
    e.preventDefault();
  }

  onChange(key, value) {
    this.setState({
      // this.state.form[key] = value;
      // this.forceUpdate();
    });
  }
  render() {
    return (
      <Form
        className="en-US"
        model={this.state.form}
        labelWidth="120"
        onSubmit={this.onSubmit.bind(this)}
      >
        <Form.Item>
          <Input
            value={this.state.form.name}
            onChange={this.onChange.bind(this, "name")}
            placeholder="Please type your question here..."
          />
        </Form.Item>

        <Form.Item>
          <Checkbox.Group
            value={this.state.form.type}
            onChange={this.onChange.bind(this, "type")}
          >
            <Checkbox name="type" />
            <Input
              value={this.state.form.option}
              onChange={this.onChange.bind(this, "option")}
              placeholder="option 1"
            />

            <Checkbox name="type" />
            <Checkbox name="type" />
          </Checkbox.Group>

          <Button type="primary" nativeType="submit">
            <Icon name="plus" />
            Add New Option
          </Button>
        </Form.Item>

        <Form.Item>
          <Select value={this.state.form.region}>
            <Select.Option label="Multi Choices" value="Multi Choices" />
            <Select.Option label="Single Choice" value="Single Choice" />
          </Select>

          <Button>Cancel</Button>
        </Form.Item>
      </Form>
    );
  }
}

export default CreateMultipleChoiseQuestion;
