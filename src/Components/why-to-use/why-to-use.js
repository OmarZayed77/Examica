import React from 'react';
import { Layout } from 'element-react/next';
import './why-to-use.css';
const WhyToUse = (props) => {
  return(
  <>
   <Layout.Row className="WhyToUse" type="flex" justify="center">
      <Layout.Col xs="17" sm="15" md="15" lg="11" span="11">
          <p className="WhyToUse-title">Why To use?</p>
          <p className="WhyToUse-p">Do you need some serious testing software for your students? Or do you need to hand out a lot of certificates?<br></br><br></br>
          Do you want to easily setup your exam software and invite your users or do you need to connect your testing software with your internal software?
          Start using the Online Exam Builder all this is within reach.<br></br> <br></br> Take a look at all the features or ask for a demo.</p> 
          <button>Take a tour</button>    
      </Layout.Col>
      <Layout.Col span="11">
        <img className="WhyToUse-Img" src="https://i.ibb.co/k9XRZDF/undraw-online-page-cq94.png" alt="whyToUe"/>
      </Layout.Col>
    </Layout.Row>
  </>
  );
};

export default WhyToUse;
