import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import OrganizationProfile from '../../Pages/organizationPage';
import {connect} from 'react-redux';
import {getCurrent, getOrgById} from '../../Store/Actions/organizationActions';
import UsersList from '../../Containers/Users/UsersList';

class Organization extends Component {

  state = {
    orgId: null
  }

  componentDidMount() {
    this.setState({
      orgId: this.props.match.params.id
    });
    this.props.onGetRoles(this.props.userId,this.props.match.params.id, this.props.token);
    this.props.onGetOrg(this.props.match.params.id, this.props.token);
  }

  componentDidUpdate() {
    if(this.props.match.params.id !== this.state.orgId)
    {
      this.setState({
        orgId: this.props.match.params.id
      });
      this.props.onGetRoles(this.props.userId,this.props.match.params.id, this.props.token);
      this.props.onGetOrg(this.props.match.params.id, this.props.token);
    }
  }

  render() {
    return (
      <Switch>
        <Route path="/organization/:id/users" component={UsersList}/>
        <Route path="/organization/:id" component={OrganizationProfile}/>
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    userId: state.auth.userId,
    organization: state.organizations.currentOrgnaziation
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetRoles: (userId,orgId,token) => {dispatch(getCurrent(userId,orgId,token))},
    onGetOrg: (orgId,token) => {dispatch(getOrgById(orgId,token))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Organization);
