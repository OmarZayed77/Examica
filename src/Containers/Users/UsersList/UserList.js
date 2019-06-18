import React, { Component } from 'react';
import UserCard from '../UserCard';
import { connect } from 'react-redux';
import SearchBox from '../../../Components/SearchBox';
import './UserList.css';
import * as userActions from '../../../Store/Actions/userActions';

class UserList extends Component {
  componentDidMount() {
    this.props.onGetAll(1, this.props.token);
  }

  render() {
    console.log(this.props);
    let users = this.props.users.map(user=>{
      return(
          <UserCard 
          key={user.id}
          UserName={user.UserName}
          Email={user.Email}
          PhoneNumber={user.PhoneNumber}
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
const mapStateToProps=state=>{
  return {
   users: state.users.allUsers,
   token: state.auth.token
  }
}
 
const mapDispatchtoProps = dispatch => {
  return {
    onGetAll: (orgId, token) => {dispatch(userActions.getAll(orgId, token))}
  }
}

export default connect(mapStateToProps,mapDispatchtoProps)(UserList);
