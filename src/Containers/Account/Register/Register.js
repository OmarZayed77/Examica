import React, { Component } from 'react';
import { Form, Input, Button, Layout } from 'element-react/next';
class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        pass: [
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
              } else if (value !== this.state.form.pass) {
                callback(new Error('Two inputs don\'t match!'));
              } else {
                callback();
              }
            }
          }
        ],
        age: [
          { required: true, message: 'Please input the age', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              var age = parseInt(value, 10);

              setTimeout(() => {
                if (!Number.isInteger(age)) {
                  callback(new Error('Please input digits'));
                } else {
                  if (age < 18) {
                    callback(new Error('Age must be greater than 18'));
                  } else {
                    callback();
                  }
                }
              }, 1000);
            }, trigger: 'change'
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

  render() {
    return (
      <fragment>
        <Layout.Row gutter="20" justify="center" align="middle">
          <Layout.Col>
            <div></div>
          </Layout.Col>
        </Layout.Row>
        <Layout.Row gutter="10" type="flex"  justify="center" align="middle">
          {/* register Form */}
          <Layout.Col span="8">
            <Form ref="form" model={this.state.form} rules={this.state.rules} labelWidth="100" className="demo-ruleForm">
              <Form.Item label="Password" prop="pass">
                <Input type="password" value={this.state.form.pass} onChange={this.onChange.bind(this, 'pass')} autoComplete="off" />
              </Form.Item>
              <Form.Item label="Confirm" prop="checkPass">
                <Input type="password" value={this.state.form.checkPass} onChange={this.onChange.bind(this, 'checkPass')} autoComplete="off" />
              </Form.Item>
              <Form.Item label="Age" prop="age">
                <Input value={this.state.form.age} onChange={this.onChange.bind(this, 'age')}></Input>
              </Form.Item>
              <Form.Item>
                <Button type="primary" onClick={this.handleSubmit.bind(this)}>Submit</Button>
                <Button onClick={this.handleReset.bind(this)}>Reset</Button>
              </Form.Item>
            </Form>
          </Layout.Col>
        </Layout.Row>
      </fragment>
    )
  }

}

export default Register;
