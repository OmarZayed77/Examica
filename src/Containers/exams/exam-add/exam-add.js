import React, { Component } from 'react';
import {Form, Button, Input, DateRangePicker} from 'element-react/next';

class ExamAdd extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // Exam Object to bind form data with 
      form: {
        Name: "",
        Mark: "",
        StartDateTime: "",
        EndDateTime: "",
        IsPublic: false,
        OrganizationId: 0
      },
      // Form Rules and Validations to be used by Element UI Form
      rules: {
        Name: [
          { required: true, message: 'Please input the Exam Name', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('Please input the Image URL'));
              } else {
                callback();
              }
            }
          }
        ],
        StartDateTime: [
          { required: true, type: 'datetime', message: 'Please select A Company', trigger: 'change' }
        ],
        EndDateTime: [
          { required: true, type: 'datetime', message: 'Please select A Company', trigger: 'change' }
        ],
        Mark: [
          { required: true, type: 'number', message: 'Please input the Exam Mark', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              var mark = parseInt(value);
              setTimeout(() => {
                if (!Number.isInteger(mark)) {
                  callback(new Error('Please input digits'));
                } else {
                  if (mark < 1) {
                    callback(new Error('Mark must be greater than 0'));
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

  // Event Handler to handle Form Submit Button by validate it and then submit the product
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });
    this.refs.form.validate((valid) => {
      if (valid) {
       console.log("Valid", this.state.form);
       console.log(this.state.form.StartDateTime);
      }
      else {
       console.log("Not Valid", this.state.form);
       console.log(this.state.form.StartDateTime);
        return false;
      }
    });
  }

  // Event Handler to handle form reset to latest details of a product
  handleReset(e) {
    e.preventDefault();
    this.refs.form.resetFields();
    this.setState({
      form: {
        Name: "",
        Mark: "",
        StartDateTime: "",
        EndDateTime: "",
        IsPublic: false,
        OrganizationId: 1
      }
    });
  }

  // Event Handler to bind form inputs values to form object in state
  onChange(key, value) {
    if (key === "Mark" && !isNaN(parseInt(value))) value = parseInt(value);
    this.setState({
      form: Object.assign({}, this.state.form, { [key]: value })
    });
  }

  // Get Companies and The Product to be updated from database after component did mount
  componentDidMount() {
    
  }

  render() {
    return (
      <Form className={`demo-ruleForm`} ref="form" model={this.state.form} rules={this.state.rules} labelWidth="100">
        <Form.Item label="Name" prop="Name">
          <Input type="text" value={this.state.form.Name} onChange={this.onChange.bind(this, 'Name')} autoComplete="off" />
        </Form.Item>
        <Form.Item label="Mark" prop="Mark">
          <Input type="number" value={this.state.form.Mark} onChange={this.onChange.bind(this, 'Mark')} autoComplete="off" />
        </Form.Item>
        <Form.Item label="Date Range">
          <DateRangePicker
                isShowTime={true}
                value={this.state.StartDateTime}
                placeholder="Pick a range"
                onChange={date => {
                  this.setState({ form: {
                      ...this.state.form,
                      StartDateTime: date[0].format('YYYY-MM-DD HH:mm:ss'),
                      EndDateTime: date[1].format('YYYY-MM-DD HH:mm:ss')
                  }})
                }}
              />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={this.handleSubmit.bind(this)}>Submit</Button>
          <Button onClick={this.handleReset.bind(this)}>Reset</Button>
        </Form.Item>
      </Form>
    );
  }
}


export default ExamAdd;
