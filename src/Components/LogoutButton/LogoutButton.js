import React from 'react';
import { connect } from 'react-redux'
import {Button} from 'element-react/next';
import {logoutUser} from '../../Store/Actions/authActions'
import './LogoutButton.css'

const LogoutButton = (props) => {
  
  const logout=()=>{
    props.logout();
  }
  return <Button onClick={logout}>Logout</Button>;
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logoutUser())
  };
};
export default connect(null, mapDispatchToProps)(LogoutButton);
