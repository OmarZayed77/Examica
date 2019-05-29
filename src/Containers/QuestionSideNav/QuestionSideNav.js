import React, { Component } from 'react';
import { Layout, Menu } from 'element-react/next';
import QuestionsList from '../Questions-list';
import './QuestionSideNav.css';
import QuestionSettings from '../QuestionSettings/QuestionSettings';

class QuestionSideNav extends Component {
  state = {
    open: false
  }

  Toggle = () => {
    this.setState({
      open: !this.state.open
    })
  }
  render() {
    return (
      <Layout.Row className="tac QuestionMenu" >
        <Layout.Col span={8}>
          <Menu defaultActive="2" className="el-menu-vertical-demo" onOpen={this.Toggle.bind(this)}>
          <Menu.SubMenu index="1" title={<span><i class="far fa-question-circle"></i>Questions</span>}>
            <Menu.ItemGroup >
               <QuestionsList/>
            </Menu.ItemGroup>
          </Menu.SubMenu>
          <Layout.Row className="tac">
        <Layout.Col span={8}>
          <Menu defaultActive="2" className="el-menu-vertical-demo" onOpen={this.Toggle.bind(this)}>
          <Menu.SubMenu index="1" title={<span><i class="fas fa-cog"></i>Popular Settings</span>}>
            <Menu.ItemGroup >
              <QuestionSettings/>
            </Menu.ItemGroup>
          </Menu.SubMenu>
       
        </Menu>
        </Layout.Col>
      </Layout.Row>
        </Menu>
        </Layout.Col>
      </Layout.Row>
      
    )
  }
}

export default QuestionSideNav;
