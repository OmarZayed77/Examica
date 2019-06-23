import React from 'react';
import {Layout,Menu} from 'element-react/next';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import './MiddleNavbar.css'

const MiddleNavbar = (props) => {
  const onSelect= (index, indexPath, item) => {
    props.history.push(item.props.to);
  }
  return(
    <Layout.Row >
    <Layout.Col span={24}>
      <div className="MiddleNavbar">
        <Menu className="el-menu-demo" mode="horizontal" onSelect={onSelect}>
          <Menu.Item  className="logo" index="1" to={`/organization/${props.org.id}`}>{props.org.name}</Menu.Item>
          <Menu.Item index="1" to={`/organization/${props.org.id}`}><i className="fas fa-user-circle"></i> Organization Profile</Menu.Item>
          <Menu.Item index="2" to='/exams/add'><i className="fas fa-stream"></i> Build Exam</Menu.Item>
          <Menu.Item index="3" to='/organization/question'><i className="fas fa-question"></i> Questions Pool</Menu.Item>
          <Menu.Item index="4" to='/exams'><i className="fas fa-question"></i> Your Exams</Menu.Item>
          <Menu.Item index="5" to={`/organization/${props.org.id}/myusers`}><i className="fas fa-users-cog"></i> Manage Users</Menu.Item>
          <Menu.Item index="6" to={`/organization/${props.org.id}/users`}><i className="fas fa-users"></i> Users</Menu.Item>
        </Menu>
      </div>
    </Layout.Col>
  </Layout.Row>
  );
};

export const mapStateToProps = state => {
  return {
    org : state.organizations.currentOrgnaziation
  }
}

export default withRouter(connect(mapStateToProps)(MiddleNavbar));
