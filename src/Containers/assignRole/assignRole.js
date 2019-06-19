import React, { Component } from 'react';
import {Checkbox,Layout,Button} from 'element-react/next';
import * as getUserAPI from '../../API/userAPI';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './assignRole.css';

import * as userActions from '../../Store/Actions/userActions'

class AssignRole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        Name: '',
        Email:'',
        PhoneNumber :'',
        Roles: {
          userId: "",
          organizationId: 1,
          IsAdmin:false,
          IsExaminer:false,
          IsExaminee:false,
          IsObserver:false,
        }
      },
      rules: {
        Role: [
          { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
        ],
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

  onChange(key, value) {
    let newRoles = {...this.state.user.Roles};
    newRoles[key]= value;
    this.setState({
      user:{
        ...this.state.user,
        Roles: newRoles
      }
    });
  }

  onAddRole() {
    this.props.onAddRole(this.state.user.Roles, this.props.token);
  }

  componentDidUpdate(){
    getUserAPI.getUser(this.props.match.params.id , this.props.token)
    .then(res => {
      if (res.status === 200) {
        this.setState({
          user : res.data
        })
      }
    })
    .catch(console.error)
  }

  render() {
    return (
      <div className="assignRole container">
      <Layout.Row gutter="20">
        <Layout.Col span="6">
        <div className="grid-content bg-purple">
        <ul>
          <li>
          <label><i class="fas fa-user"></i></label>
          <label>{this.state.user.Name}</label>
          </li>
          <li>
          <label><i class="far fa-envelope"></i></label>
          <label>{this.state.user.Email}</label>
          </li>
          <li>
          <label><i class="fas fa-mobile-alt"></i></label>
          <label>{this.state.user.PhoneNumber}</label>
          </li>
        </ul>
        </div>
        </Layout.Col>
        <Layout.Col span="6" offset="6">
        <div className="grid-content bg-purple">
          <Checkbox label="Make as an admin" checked={this.state.user.Roles.IsAdmin} onChange={this.onChange.bind(this, "IsAdmin")}></Checkbox>
          <Checkbox label="Make as an examiner" checked={this.state.user.Roles.IsExaminer} onChange={this.onChange.bind(this, "IsExaminer")}></Checkbox>
          <Checkbox label="Make as an examinee" checked={this.state.user.Roles.IsExaminee} onChange={this.onChange.bind(this, "IsExaminee")}></Checkbox>
          <Checkbox label="Make as an observer" checked={this.state.user.Roles.IsObserver} onChange={this.onChange.bind(this, "IsObserver")}></Checkbox>
        <Button onClick={this.onAddRole.bind(this)} className="Buttonprimary">Submit</Button>
        </div>
        </Layout.Col>
      </Layout.Row>
      </div>
    )
  }
}
const mapStateToProps = () => {
  return {
    user : state.users.oneUser,
    token: state.auth.token
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAddRole : (role, token) => dispatch(userActions.addRole(role, token))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(AssignRole));
