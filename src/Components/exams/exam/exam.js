import React from 'react';
import Navbar from '../../Navbar/Navbar';
import { Menu, Layout, Card , Button } from 'element-react/next';
import '../exam/exam.css'

const Exam = () => {

  return (
    <fragment className="Exam">
      <Layout.Row>
        <Layout.Col span={24}>
          <Navbar />
        </Layout.Col>
      </Layout.Row>

      <Layout.Row>
        <Layout.Col span={24}>
        <div>
          <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal">
            <Menu.Item index="1"><i class="fas fa-user-circle"></i> Profile</Menu.Item>
            <Menu.Item index="1"><i class="fas fa-cogs"></i> Account Settings</Menu.Item>
            <Menu.Item index="3"><i class="fas fa-user-cog"></i> Admin Info</Menu.Item>
            <Menu.Item index="3"><i class="fas fa-stream"></i> Build Exam</Menu.Item>
            <Menu.Item index="3"><i class="fas fa-question"></i> Questions Pool</Menu.Item>
            <Menu.Item index="3"><i class="fas fa-question"></i> Your Exams</Menu.Item>
            <Menu.Item index="3"><i class="fas fa-users-cog"></i> Manage Users</Menu.Item>
            <Menu.Item index="3"><i class="fas fa-file-chart-line"></i> Reports</Menu.Item>
          </Menu>
        </div>
        </Layout.Col>
      </Layout.Row>
   
      <Layout.Row>
        <Layout.Col span={8} offset={0}>
          <Card bodyStyle={{ padding: 0 }}>
            <img src="https://www.ecmag.com/sites/default/files/styles/article_medium/public/article_images/thumb_images/test_examine_dreamstime_14882569_2.jpg?itok=BaDalmat" className="image" />
            <div style={{ padding: 14 }}>
              <span>Yummy hamburger</span>
              <div className="bottom clearfix">
                <time className="time">2016-10-21 16:19</time>
                <Button type="text" className="button">Operating button</Button>
              </div>
            </div>
          </Card>
        </Layout.Col>
      </Layout.Row>
    </fragment>
  );
};


export default Exam;
