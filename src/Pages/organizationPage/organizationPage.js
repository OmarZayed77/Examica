import React, { Component } from 'react';
import {Button, Layout } from 'element-react/next';
import './organizationPage.css'
import {connect} from 'react-redux';
import * as orgActions from '../../Store/Actions/organizationActions';

class OrganizationPage extends Component {
  

  componentDidMount() {
    //get org by id from url
    this.props.onSelect(this.props.match.params.id);
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
        <Layout.Col lg={4}>
        <Button className="Buttonsecondry">Add Question  <i className="fas fa-plus"></i></Button>
        
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

export default connect(mapStateToprops, mapDispatchToprops)(OrganizationPage);
