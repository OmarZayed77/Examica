import React, { Component } from 'react';
import UserCard from '../UserCard';
import { connect } from 'react-redux';
import { Layout } from 'element-react/next';
import SearchBox from '../../../Components/SearchBox';
import './UserList.css';
import Navbar from '../../../Components/Navbar';


class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          UserName:"Dina",
          Email:"d@yahoo.com",
          PhoneNumber:"019299222",

        },
        {
          id: 2,
          UserName:"tete",
          Email:"e@yahoo.com",
          PhoneNumber:"019299222",

        },
        {
          id: 3,
          UserName:"lolo",
          Email:"eee@yahoo.com",
          PhoneNumber:"0129449222",

        }



      ]
    };
  }
  
  render() {
    let users = this.state.users.map(user=>{
      return(
        <Layout.Col span="10" offset="1"  lg="20">
          <UserCard 
          key={user.id}
          userName={user.UserName}
          email={user.Email}
          PhoneNumber={user.PhoneNumber}
          />
       
        
        </Layout.Col>

)});
    return(
      <>
      <Navbar></Navbar>
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
   users: state.users
  }
}
 

export default connect(mapStateToProps,null)(UserList);
