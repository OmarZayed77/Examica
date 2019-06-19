import React from 'react';
import {Menu,Layout,Button} from 'element-react/next';
import {withRouter} from 'react-router-dom';
import './upperNavbar.css'

const UpperNavbar = (props) => {
  
  const onSelect = (index,indexPath,item) => {
    if(item.props.to) props.history.push(item.props.to);
  }

  return (
    <div className="upperNavbar">
    <Menu defaultActive="1" className="el-menu-demo" mode="horizontal" onSelect={onSelect} >
  <Layout.Row >
      <Layout.Col span="19">
      <Menu.Item index="1" ><a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a></Menu.Item>
      <Menu.Item index="2" ><a href="https://twitter.com/"><i className="fab fa-twitter"></i></a></Menu.Item>
      <Menu.Item index="3"><a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a></Menu.Item>
      </Layout.Col>
      <Layout.Col span="4" className="listOfContent">
      <Menu.Item index="4" to="/Login" >Sign in</Menu.Item>
      <Menu.Item index="5" to="/Register" >
      <Button className="Buttonprimary">Sign up</Button>
      </Menu.Item>
      </Layout.Col>
    </Layout.Row>
    </Menu>
  </div>
  )
};

export default withRouter(UpperNavbar);
