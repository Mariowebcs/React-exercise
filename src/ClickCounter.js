import React from "react";
import { useState, useEffect } from "react";

const ClickCounter = (props) => {
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    setCounter((prevState) => prevState + 1);
  };

  useEffect(()=>{
    props.onCounterChange(counter)
  },[counter])
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button type="button" onClick={clickHandler}>
        Update counter
      </button>
    </div>
  );
};

export default ClickCounter;
