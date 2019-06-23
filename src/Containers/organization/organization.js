import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import OrganizationProfile from '../../Pages/organizationPage';
import {connect} from 'react-redux';
import {getCurrent, getOrgById} from '../../Store/Actions/organizationActions';
import {getAll, getAllOfOrg} from '../../Store/Actions/userActions';
import UsersList from '../../Containers/Users/UsersList';
import AssignRoles from '../assignRole';

class Organization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orgId: null
    }
    this.getCurrentData = this.getCurrentData.bind(this);
  }


  getCurrentData() {
    this.setState({
      orgId: this.props.match.params.id
    });
    this.props.onGetRoles(this.props.userId,this.props.match.params.id, this.props.token);
    this.props.onGetOrg(this.props.match.params.id, this.props.token);
    this.props.onGetAllUsers(this.props.token);
    this.props.onGetAllUsersOfOrg(this.props.match.params.id, this.props.token);
  }

  componentDidMount() {
    this.getCurrentData();
  }

  componentDidUpdate() {
    if(this.props.match.params.id !== this.state.orgId)
    {
      this.getCurrentData();
    }
  }

  render() {
    return (
      <Switch>
        <Route path="/organization/:id/myusers" render={()=> <UsersList users={this.props.orgUsers} />} />
        <Route path="/organization/:id/users/assign/:userId" component={AssignRoles}/>
        <Route path="/organization/:id/users" render={()=> <UsersList users={this.props.allUsers} />} />
        <Route path="/organization/:id" component={OrganizationProfile}/>
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    userId: state.auth.userId,
    organization: state.organizations.currentOrgnaziation,
    allUsers: state.users.allUsers,
    orgUsers: state.users.allUsersOfOrg
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetRoles: (userId,orgId,token) => {dispatch(getCurrent(userId,orgId,token))},
    onGetOrg: (orgId,token) => {dispatch(getOrgById(orgId,token))},
    onGetAllUsers: (token) => {dispatch(getAll(token))},
    onGetAllUsersOfOrg: (orgId, token) => {dispatch(getAllOfOrg(orgId, token))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Organization);
