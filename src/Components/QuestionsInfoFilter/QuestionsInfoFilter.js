import React from 'react';
import { Menu } from 'element-react/next';

const QuestionsInfoFilter = () => {
  return (
    <>
      <h1>Browse Criteria</h1>
      <Menu defaultActive="2" className="el-menu-vertical-demo" onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)} theme="dark">
        <Menu.SubMenu index="1" title="Type">
          <Menu.Item index="1-1">True/False</Menu.Item>
          <Menu.Item index="1-2">Multiple Choices</Menu.Item>
          <Menu.Item index="1-2">Essay</Menu.Item>
          <Menu.Item index="1-2">Complex</Menu.Item>
          <Menu.Item index="1-2">Match</Menu.Item>
        </Menu.SubMenu >
        <Menu.SubMenu index="2" title="Level of Difficulty">
          <Menu.Item index="2-1">Easy</Menu.Item>
          <Menu.Item index="2-2">Intermediate</Menu.Item>
          <Menu.Item index="2-2">Advanced</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu index="3" title="All">
          <Menu.Item index="3-1">All</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </>
  )

}

export default QuestionsInfoFilter;
