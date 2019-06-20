import React, { Component } from 'react';
import './Contact-Us.css'
import ContacUsInformation from '../../Components/ContacUsInformation/ContacUsInformation';
import {Layout} from 'element-react/next'

class ContactUs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contactInfo: [
        {
          icon: <i class="fas fa-map-marker-alt"></i>,
          name: "Address",
          description: "95 Nasr City , Cairo , Egypt"
        },
      ]

    }
  }

  render() {
    const contactinfo = this.state.contactInfo.map((info, index) => {
      return (
        <Layout.Col span={8} offset={0}>
          <ContacUsInformation
            key={index}
            name={info.name}
            icon={info.icon}
            description={info.icon}
          />
        </Layout.Col>
      );
    });
    return (
      <>
        <div className="ContactUs">
          <h3>Contact Information</h3>
          <p>We are Examica Team build this website to offer you an awesome service to faciliate your work! </p>
        </div>
        <Layout.Row >
          {contactinfo}
        </Layout.Row>
        <ContacUsInformation />
      </>
    );
  }
}



export default ContactUs;
