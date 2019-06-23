import React, { Component } from 'react';
import { Layout, Menu } from 'element-react/next';
import QuestionsList from '../Questions-list';
import './QuestionTypes.css';
import {Switch, Route} from 'react-router-dom';
import MCQMul from '../CreateChoiseQuestion';

class QuestionTypes extends Component {
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
      <Layout.Row className="tac QuestionTypes" >
        <Layout.Col span={8} className="QuestionMenuCol" lg="10">
          <Menu defaultActive="1" className="el-menu-vertical-demo"  onOpen={this.Toggle.bind(this)}>
          <Menu.SubMenu index="1" title={<span><i className="far fa-question-circle"></i>Questions</span>}>
            <Menu.ItemGroup title="">
               <QuestionsList/>
            </Menu.ItemGroup>
          </Menu.SubMenu>
        </Menu>
        </Layout.Col>
        <Layout.Col span={16}>
            <Switch>
              <Route path="/organization/:id/questions/add/mcqMul" render={()=> <MCQMul type="MCQ_MultiAnswers" />} />
              <Route path="/organization/:id/questions/add/mcqSingle" render={()=> <MCQMul type="MCQ_SingleAnswer" />} />
              {/* <Route path="/organization/:id/questions/add/mcq" component={MCQMul} /> 
              <Route path="/organization/:id/questions/add/tf" component={} />
              <Route path="/organization/:id/questions/add/complex" component={} />
              <Route path="/organization/:id/questions/add" component={} /> */}
            </Switch>
        </Layout.Col>
      </Layout.Row>
      
    )
  }
}

export default QuestionTypes;
