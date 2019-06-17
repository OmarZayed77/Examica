import React, { Component } from 'react';
import {Card, Layout} from 'element-react/next';
import './UserCard.css' ;


class UserCard extends Component {
    render() {
      return (
        <Layout.Col md="12">
        <Card className="box-card">
          <div className="userName"><span className="txt">username:</span>{this.props.UserName}</div>
          <div className="email"><span className="txt">Email:</span> {this.props.Email}</div>
          <div className="phoneNum"><span className="txt">phoneNum:</span> {this.props.PhoneNumber}</div>
        </Card>
        </Layout.Col>
        
      )
    } 
  }

export default UserCard;