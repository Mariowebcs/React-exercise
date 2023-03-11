import React from "react";
import { Link } from 'react-router-dom';

const Welcome = ({ name }) => {
  return (
    <div>
      <h1>hello, {name}</h1>
      <Link to="/ClickCounter">Go to CLick Counter</Link>
    </div>
  );
};

export default Welcome;
