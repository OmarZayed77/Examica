import React from 'react';
import './ContacUsInformation.css'


const ContacUsInformation = (props) => {
  return (
<>
        <i className={props.icon}></i>
        <h5>{props.name}</h5>
        <p>{props.description}</p>
</>
  );
};

export default ContacUsInformation;
