import React from 'react';
import UpperNavbar from './upperNavbar';
import LowerNavbar from './lowerNavbar';
import MiddleNavbar from './MiddleNavbar';
import './Navbar.css';
import {connect} from 'react-redux';


const Navbar = (props) => {
  let nav = null;
  if (props.isLoggedIn) {
    nav = (
      <div>
      <MiddleNavbar/>
      </div>
    )
  }else {
    nav = (<div><UpperNavbar/><LowerNavbar/></div>)
  }
  return (
    nav
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

export default connect(mapStateToProps)(Navbar);
