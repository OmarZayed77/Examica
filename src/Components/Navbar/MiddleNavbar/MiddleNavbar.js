import React from 'react';

const MiddleNavbar = () => {
  return(
    <Layout.Row>
    <Layout.Col span={24}>
      <div>
        <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal">
          <Menu.Item index="1"><i className="fas fa-user-circle"></i> Profile</Menu.Item>
          <Menu.Item index="1"><i className="fas fa-cogs"></i> Account Settings</Menu.Item>
          <Menu.Item index="3"><i className="fas fa-user-cog"></i> Admin Info</Menu.Item>
          <Menu.Item index="3"><i className="fas fa-stream"></i> Build Exam</Menu.Item>
          <Menu.Item index="3"><i className="fas fa-question"></i> Questions Pool</Menu.Item>
          <Menu.Item index="3"><i className="fas fa-question"></i> Your Exams</Menu.Item>
          <Menu.Item index="3"><i className="fas fa-users-cog"></i> Manage Users</Menu.Item>
          <Menu.Item index="3"><i className="fas fa-file-chart-line"></i> Reports</Menu.Item>
        </Menu>
      </div>
    </Layout.Col>
  </Layout.Row>
  );
};

export default MiddleNavbar;
