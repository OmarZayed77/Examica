import React from 'react';
import {Layout ,Button} from 'element-react/next'
import './CreateTrueOrFalseQuestion.css'
const CreateTrueOrFalseQuestion = () => {
  return(
 
    <Layout.Row lg="10" className="CreateTrueOrFalseQuestion">
     <Layout.Col span="24"><div className="grid-content bg-purple-dark"></div>
        <h3>Examica</h3>
        <div className="intro-block">
        <div className="block">
        <span className="wrapper">
          <Button type="success">Success</Button>
          <Button type="primary" icon="search" className="primary">Search</Button>
        </span>
        </div>
        </div>
     </Layout.Col>
    </Layout.Row>

  )
};

export default CreateTrueOrFalseQuestion;
