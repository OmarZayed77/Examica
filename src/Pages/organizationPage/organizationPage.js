import React, { Component } from 'react';
import {Button, Layout } from 'element-react/next';
import './organizationPage.css'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as orgActions from '../../Store/Actions/organizationActions';

class OrganizationPage extends Component {
  

  componentDidMount() {
    //get org by id from url
    this.props.onSelect(this.props.match.params.id);
  } 

  nextPath(path) {
    this.props.history.push(path);
  }


  render() {
    let PricingPlanId = 1;
    let PricingPlan= <div></div>;
    switch (PricingPlanId) {
      case 0:
        PricingPlan = "Basic";
        break;
        case 1:
          PricingPlan = "Pro";
          break;
          case 2:
            PricingPlan = "Pro +";
            break;
      default:
        break;
    }
    
    return (
      <div className="organization-page">
      <Layout.Row>
        <Layout.Col span="4" offset="20">
        <div className="grid-content bg-purple-light buttons">
        <Button onClick={() => this.nextPath.bind('/QuestionTypes')} className="Buttonsecondry">Question  <i className="fas fa-plus"></i></Button> 
        <Button onClick={() => this.nextPath.bind('/exams/add')} className="Buttonsecondry">Exam  <i className="fas fa-plus"></i></Button> 
        </div>
        </Layout.Col>
      </Layout.Row>
      <Layout.Row className="container">
        <Layout.Col lg={8}>
          <div className="OrganizationPage-pic"/> 
        </Layout.Col>
        <Layout.Col lg={12}>
        <Layout.Row className="container-rows">
        Company Name : {this.props.org.Name}
        </Layout.Row>
        <Layout.Row className="container-rows">
        Pricing Plan : {PricingPlan}
        </Layout.Row>
        <Layout.Row className="container-rows">
        </Layout.Row>
        </Layout.Col>
      </Layout.Row>
      </div>
    )
  }
}


const mapStateToprops = state => {
  return {
    org: state.organizations.currentOrgnaziation,
    isLoggedIn: state.auth.isLoggedIn
  }
}

const mapDispatchToprops = dispatch => {
  return {
    onSelect: (id) => dispatch(orgActions.getCurrent(id)),
  }
}

export default withRouter(connect(mapStateToprops, mapDispatchToprops)(OrganizationPage));
