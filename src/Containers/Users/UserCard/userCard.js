import React, { Component } from 'react';
import {Card} from 'element-react/next';
import './UserCard.css' ;


class UserCard extends Component {
    render() {
      console.log(this.props);
      return (
        <Card className="box-card">
          <img alt="Profile Picture" className="userCard-img" src="http://www.mattmovingsystems.com/root/images/profile_user.gif"></img>
          <div className="userName">{this.props.UserName}</div>
          <div className="email">{this.props.Email}</div>
          <div className="phoneNum">{this.props.PhoneNumber}</div>
        </Card>
      )
    } 
  }

export default UserCard;