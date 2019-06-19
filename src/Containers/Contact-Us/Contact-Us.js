import React, { Component } from 'react';
import './Contact-Us.css'
import ContacUsInformation from '../../Components/ContacUsInformation/ContacUsInformation';
import { connect } from 'react-redux';

class ContactUs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contactInfo: [
        {
          icon: "<i class='fas fa-map-marker-alt'></i>",
          name: "Address",
          description: "95 Nasr City , Cairo , Egypt"
        },
        {
          icon: "<i class='fas fa-phone-square-alt'></i>",
          name: "Phone Numbers",
          description: "+02 875369208 - Central Office+02 353363114 - Fax"
        },
        {
          icon: "<i class='far fa-envelope'></i>",
          name: "Email Address",
          description: "support@globals.cominfo@globals.com"
        },
      ]

    }
  }

  render() {
    return (
      <>
        <div className="ContactUs">
          <h3>Contact Information</h3>
          <p>We are Examica Team build this website to offer you an awesome service to faciliate your work! </p>
        </div>
        <ContacUsInformation/>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    contactInfo: state.contactInfo
  };
};

export default connect(mapStateToProps, null)(ContactUs);
