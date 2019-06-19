import React, { Component } from "react";
import { Form, Input, Button, Layout } from "element-react/next";
import { login } from "../../../Store/Actions/authActions";
import { connect } from "react-redux";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        Email: "",
        Password: ""
      },
      rules: {
        Email: [
          {
            required: true,
            message: "Please input email address",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Please input correct email address",
            trigger: "blur,change"
          }
        ],
        Password: [
          {
            required: true,
            message: "Please input the password",
            trigger: "blur"
          },
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error("Please input the password"));
              }
              callback();
            }
          }
        ]
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.refs.form.validate(valid => {
      if (valid) {
        //alert('submit!');
        this.props.loginUser(this.state.form);
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
  onEmailChange(value) {
    this.setState({
      form: Object.assign({}, this.state.form, { Email: value })
    });
  }

  render() {
    return (
      <>
        <Layout.Row
          className="Login"
          gutter="10"
          type="flex"
          justify="center"
          align="middle"
        >
          {/* register Form */}
          <Layout.Col span="8">
            <Form
              ref="form"
              model={this.state.form}
              rules={this.state.rules}
              labelWidth="100"
              className="demo-ruleForm"
            >
              <Form.Item prop="Email" label="Email">
                <Input
                  value={this.state.form.Email}
                  onChange={this.onEmailChange.bind(this)}
                />
              </Form.Item>
              <Form.Item label="Password" prop="Password">
                <Input
                  type="password"
                  value={this.state.form.Password}
                  onChange={this.onChange.bind(this, "Password")}
                  autoComplete="off"
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" onClick={this.handleSubmit.bind(this)}>
                  Login
                </Button>
              </Form.Item>
            </Form>
          </Layout.Col>
        </Layout.Row>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: user => dispatch(login(user))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Login);
