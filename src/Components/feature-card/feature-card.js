import React from 'react';
import './feature-card.css';
import {Button, Layout, Card} from 'element-react/next';

const FeatureCard = () => {
  return( <Layout.Row gutter="5" type="flex" justify="center" >
    <Layout.Col span={ 7 }>
      <Card bodyStyle={{ padding: 0 }}>
        <img src="https://i.ibb.co/jrSgZK6/undraw-time-management-30iu.png" alt="timeIcon"/>
        <div style={{ padding: 14 }}>
          <span>Timed examsr</span>
          <div className="bottom clearfix">
            <p>set a time for how long you expect a question to be answered
                  that will help you keep a timeframe for the hole exam. </p>
          </div>
        </div>
      </Card>
    </Layout.Col>
    <Layout.Col span={ 7 }>
      <Card bodyStyle={{ padding: 0 }}>
        <img src="https://i.ibb.co/jrSgZK6/undraw-time-management-30iu.png" alt="icon"/>
        <div style={{ padding: 14 }}>
          <span>Timed exams</span>
          <div className="bottom clearfix">
          <p>set a time for how long you expect a question to be answered
                  that will help you keep a timeframe for the hole exam. </p>
          </div>
        </div>
      </Card>
    </Layout.Col>
    <Layout.Col span={ 7 }>
      <Card bodyStyle={{ padding: 0 }}>
        <img src="https://i.ibb.co/jrSgZK6/undraw-time-management-30iu.png" alt="icon"/>
        <div style={{ padding: 14 }}>
          <span>Timed exams</span>
          <div className="bottom clearfix">
          <p>set a time for how long you expect a question to be answered
                  that will help you keep a timeframe for the hole exam. </p>
          </div>
        </div>
      </Card>
    </Layout.Col>
  </Layout.Row>);
};

export default FeatureCard;
