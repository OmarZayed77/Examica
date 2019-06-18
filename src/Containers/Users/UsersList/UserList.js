import React, { Component } from 'react';
import UserCard from '../UserCard';
import { connect } from 'react-redux';
import { Layout } from 'element-react/next';
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
        <Layout.Col span="10" offset="1"  lg="20">
          <UserCard 
          key={user.id}
          UserName={user.UserName}
          Email={user.Email}
          PhoneNumber={user.PhoneNumber}
          />
       
        
        </Layout.Col>

)});
    return(
      <>
    <SearchBox className="search"/>
      <Layout.Row gutter="10" className="userCardList">
      {users}
    </Layout.Row>
    </>
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
