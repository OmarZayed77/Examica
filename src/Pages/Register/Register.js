import React, { Component } from 'react';
import Navbar from '../../Components/Navbar'
import Registeration from '../../Containers/Account/Register'

class Register extends Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <Registeration></Registeration>
      </>
    )

  }
}

export default Register;
