import React from 'react';
import {Menu,Layout} from 'element-react/next';
import {withRouter} from 'react-router-dom';
import './lowerNavbar.css'

const LowerNavbar = (props) => {
  
  // Event Handler to route to the selected navbar item 'to' prop when a navbar item selected
  const onSelect = (index,indexPath,item) => {
    props.history.push(item.props.to);
  }
  return (
    <div className="lowerNavbar">
      <Menu defaultActive="1" className="el-menu-demo" mode="horizontal" onSelect={onSelect}>
    <Layout.Row >
        <Layout.Col span="15">
        <Menu.Item  className="logo" index="1" to="/" >Examica</Menu.Item>
        </Layout.Col>
        <Layout.Col span="8" className="listOfContent">
        <Menu.Item index="2" to="/" >Home</Menu.Item>
        <Menu.Item index="3" to="/features" >Features</Menu.Item>
        <Menu.Item index="4" to="/pricing" >Pricing</Menu.Item>
        <Menu.Item index="5" to="/aboutus" >About us</Menu.Item>
        <Menu.Item index="6" to="/contact" >Contact</Menu.Item>
        </Layout.Col>
      </Layout.Row>
      </Menu>
    </div>
  )
};

export default withRouter(LowerNavbar);
