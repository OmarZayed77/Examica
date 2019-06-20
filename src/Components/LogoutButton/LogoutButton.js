import React from 'react';
import { connect } from 'react-redux';
import {Button} from 'element-react/next';
import {logoutUser} from '../../Store/Actions/authActions';
import './LogoutButton.css';
import {withRouter} from 'react-router-dom';

const LogoutButton = (props) => {
  
  const logout=()=>{
    props.logout();
    props.history.push("/");
  }
  return <Button onClick={logout}>Logout</Button>;
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logoutUser())
  };
};
export default connect(null, mapDispatchToProps)(withRouter(LogoutButton));
