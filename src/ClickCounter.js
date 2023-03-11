import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

const ClickCounter = (props) => {
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    setCounter((prevState) => prevState + 1);
  };

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button type="button" onClick={clickHandler}>Update counter</button>
      <Link to="/">Go home</Link>
    </div>
  );
};

export default ClickCounter;