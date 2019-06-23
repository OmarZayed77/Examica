import React, { Component } from 'react';
import {Card} from 'element-react/next';
import './UserCard.css' ;


class UserCard extends Component {
    render() {
      return (
        <Card className="box-card">
          <img alt="Profile" className="userCard-img" src="http://www.mattmovingsystems.com/root/images/profile_user.gif"></img>
          <div className="userName">{this.props.UserName}</div>
          <div className="email">{this.props.Email}</div>
        </Card>
      )
    } 
  }

export default UserCard;