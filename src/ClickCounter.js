import React from "react";
import { useState, useEffect } from "react";

const ClickCounter = () => {
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    setCounter((prevState) => prevState + 1);
  };

  useEffect(()=>{
    console.log(counter)
  },[counter])

  useEffect(()=>{
   const interval = setInterval(()=> console.log('component mounted'),1000);

    return () =>{
      clearInterval(interval);
      console.log('component unmounted');
    }
  },[])

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button type="button" onClick={clickHandler}>Update counter</button>
    </div>
  );
};

export default ClickCounter;
