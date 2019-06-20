import React, { Component } from "react";
import { Menu, Layout, Button } from "element-react/next";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import LogOutButton from "../../LogoutButton";
import "./upperNavbar.css";

class UpperNavbar extends Component {
  render() {
    const onSelect = (index, indexPath, item) => {
      if (item.props.to) this.props.history.push(item.props.to);
    };

    let btns = null;
    if (1 < 2) {
      btns = (
        <>
          <Menu.Item
            index="6"
            onClick={() => {
              console.log("sign out");
            }}
          >
            <LogOutButton />
          </Menu.Item>

          <Menu.Item>
            <div className="UpperNavbar-pic" />
          </Menu.Item>

          <Menu.SubMenu mode="horizontal" className="UpperNavbar-dropDown" index="2">
            <Menu.Item index="2-1">Profile</Menu.Item>
            <Menu.Item index="2-2">My Organizations</Menu.Item>
            <Menu.Item index="2-3">Buy Organization</Menu.Item>
          </Menu.SubMenu>
        </>
      );
    } else {
      btns = (
        <>
          <Menu.Item index="4" to="/Login">
            Sign in
          </Menu.Item>
          <Menu.Item index="5" to="/Register">
            <Button className="Buttonprimary">Sign up</Button>
          </Menu.Item>
        </>
      );
    }
    return (
      <div className="upperNavbar">
        <Menu
          defaultActive="1"
          className="el-menu-demo"
          mode="horizontal"
          onSelect={onSelect}
        >
          <Layout.Row>
            <Layout.Col span="19">
              <Menu.Item index="1">
                <a href="https://facebook.com">
                  <i className="fab fa-facebook-f" />
                </a>
              </Menu.Item>
              <Menu.Item index="2">
                <a href="https://twitter.com/">
                  <i className="fab fa-twitter" />
                </a>
              </Menu.Item>
              <Menu.Item index="3">
                <a href="https://www.linkedin.com">
                  <i className="fab fa-linkedin-in" />
                </a>
              </Menu.Item>
            </Layout.Col>
            {btns}
            <Layout.Col span="4" className="listOfContent" />
          </Layout.Row>
        </Menu>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

export default connect(mapStateToProps)(withRouter(UpperNavbar));
