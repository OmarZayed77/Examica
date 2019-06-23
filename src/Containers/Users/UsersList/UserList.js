import React, { Component } from 'react';
import UserCard from '../UserCard';
// import { connect } from 'react-redux';
import SearchBox from '../../../Components/SearchBox';
import './UserList.css';
// import * as userActions from '../../../Store/Actions/userActions';

class UserList extends Component {
    render() {
    let users = this.props.users.map(user=>{
      return(
          <UserCard 
          key={user.id}
          UserName={user.userName}
          Email={user.email}
          />
)});
    return(
    <div className="UserList">
      <SearchBox className="search"/>
      <div className="UserList-Cards">
        {users}
      </div>
    </div>
    );
  }
  
}

export default UserList;
