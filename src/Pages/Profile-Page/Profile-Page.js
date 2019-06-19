import React, { Component, Fragment } from "react";
import { Layout, Icon } from "element-react";
import { connect } from "react-redux";
import * as userActions from '../../Store/Actions/userActions'
import "./Profile-Page.css";

class ProfilePage extends Component {
  render() {
    return (
      <Fragment>
        <Layout.Row>
          <Layout.Col span={5}>
            <div className="Person-pic" />
          </Layout.Col>
        </Layout.Row>
        <Layout.Row>
          <Layout.Col span={5}>
            <div className="Person-info">
              <p>Ahmed Sallam</p>
              <p>
                <Icon name="message" />
              </p>
              <p>
                <i class="fas fa-phone" />
              </p>
            </div>
          </Layout.Col>
        </Layout.Row>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: (userId, orgId,token)=>{dispatch(userActions.getOneUser(userId,orgId,token)) }
  };
};
export default connect(null,mapDispatchToProps)(ProfilePage);
