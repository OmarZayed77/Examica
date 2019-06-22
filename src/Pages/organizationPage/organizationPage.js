import React, { Component } from 'react';
import {Button, Layout } from 'element-react/next';
import './organizationPage.css'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
// import * as orgActions from '../../Store/Actions/organizationActions';

class OrganizationPage extends Component {
  
  nextPath(path) {
    this.props.history.push(path);
  }


  render() {
    let PricingPlanId = this.props.org.pricingPlanId;
    let PricingPlan= <div></div>;
    switch (PricingPlanId) {
      case 2:
        PricingPlan = "Basic";
        break;
        case 3:
          PricingPlan = "Pro";
          break;
          case 4:
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
        <Layout.Col offset="5" lg={8}>
          <div className="OrganizationPage-pic"/> 
        </Layout.Col>
        <Layout.Col lg={10}>
        <Layout.Row className="container-rows">
        Company Name : {this.props.org.name}
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

export default withRouter(connect(mapStateToprops)(OrganizationPage));
