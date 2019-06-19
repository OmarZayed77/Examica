import React, { Component, Fragment } from "react";
import { Layout } from "element-react";
import { connect } from "react-redux";
import * as userActions from "../../Store/Actions/userActions";
import "./Profile-Page.css";

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeUser: {
        name: "fatma",
        email: "fatma@gmail.com",
        phone: "01159751361"
      }
    };
  }

  // componentDidMount() {
  //   this.props.getUser(this.props.userId, "1", this.props.token);
  // }

  render() {
    return (
      <Fragment>
        <Layout.Row className="ProfilePage">
          <Layout.Col sm={11} md={8} lg={5}>
            <Layout.Row>
              <Layout.Col className="ProfilePage-left-section">
                <div className="ProfilePage-pic" />
              </Layout.Col>
            </Layout.Row>
            <Layout.Row>
              <Layout.Col>
                <div className="ProfilePage-info">
                  <h3 className="ProfilePage-info-name">{this.state.activeUser.name}</h3>
                  <p>
                  <i className="fas fa-envelope ProfilePage-info-icon"></i>
                    {this.state.activeUser.email}
                  </p>
                  <p>
                    <i className="fas fa-phone ProfilePage-info-icon" />
                    {this.state.activeUser.phone}
                  </p>
                </div>
              </Layout.Col>
            </Layout.Row>
          </Layout.Col>
        
        <Layout.Col  sm={11} md={14} lg={17} className="ProfilePage-right-section">
          <div>test 1</div>
          <div>test 2</div>
        </Layout.Col>
        </Layout.Row>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: (userId, orgId, token) => {
      dispatch(userActions.getOneUser(userId, orgId, token));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
