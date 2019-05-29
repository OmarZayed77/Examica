import React, { Component } from 'react';
import { Form, Input, Button, Layout } from 'element-react/next';
import {register} from '../../../Store/Actions/authActions'
import { connect } from 'react-redux'
class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        name: '',
        Email: '',
        Password: '',
        checkPass: '',

      },
      rules: {
        name: [
          { required: true, message: 'Please input your name', trigger: 'blur' }
        ],
        Email: [
          { required: true, message: 'Please input email address', trigger: 'blur' },
          { type: 'email', message: 'Please input correct email address', trigger: 'blur,change' }
        ],
        Password: [
          { required: true, message: 'Please input the password', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('Please input the password'));
              } else {
                if (this.state.form.checkPass !== '') {
                  this.refs.form.validateField('checkPass');
                }
                callback();
              }
            }
          }
        ],
        checkPass: [
          { required: true, message: 'Please input the password again', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('Please input the password again'));
              } else if (value !== this.state.form.Password) {
                callback(new Error('Two inputs don\'t match!'));
              } else {
                callback();
              }
            }
          }
        ]
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.refs.form.validate((valid) => {
      if (valid) {
        alert('submit!');
        console.log(this.state.form);
        this.props.registerUser(this.state.form);
      } else {
        console.log('error submit!!');
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
        <Layout.Row gutter="10" type="flex" justify="center" align="middle">
          {/* register Form */}
          <Layout.Col span="8">
            <Form ref="form" model={this.state.form} rules={this.state.rules} labelWidth="100" className="demo-ruleForm">
              <Form.Item label="User Name" prop="name">
                <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')}></Input>
              </Form.Item>
              <Form.Item prop="Email" label="Email">
                <Input value={this.state.form.Email} onChange={this.onEmailChange.bind(this)}></Input>
              </Form.Item>
              <Form.Item label="Password" prop="Password">
                <Input type="password" value={this.state.form.Password} onChange={this.onChange.bind(this, 'Password')} autoComplete="off" />
              </Form.Item>
              <Form.Item label="Confirm Password" prop="checkPass">
                <Input type="password" value={this.state.form.checkPass} onChange={this.onChange.bind(this, 'checkPass')} autoComplete="off" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" onClick={this.handleSubmit.bind(this)}>Submit</Button>
                <Button onClick={this.handleReset.bind(this)}>Reset</Button>
              </Form.Item>
            </Form>
          </Layout.Col>
        </Layout.Row>
      </>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    registerUser: (user) => dispatch(register(user))
  };
};
export default connect(null, mapDispatchToProps)(Register);
