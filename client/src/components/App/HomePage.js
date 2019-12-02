import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomePage = (props) => {
  return (
    <div className="">
      <h1  className="blue">Coding Challenge</h1>
      <p>click <strong>form</strong> to continue</p>
      <FontAwesomeIcon
        icon="door-open" style={{fontSize: "200px" }}  className="blue"
      />
    </div>
  )
}

export default HomePage;