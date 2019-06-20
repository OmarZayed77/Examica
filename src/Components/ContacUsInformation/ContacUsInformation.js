import React from 'react';

const ContacUsInformation = (props) => {
  return(
       <div>
          <div>{props.icon}</div>
          <h5>{props.name}</h5>
          <p>{props.description}</p>
       </div>
  );
};

export default ContacUsInformation;
