import { React,useState } from "react";

 const useCounter = ({initialvalue}) => {
  const [counter, setCounter] = useState(initialvalue);

  const handleIncrement = () => {
    setCounter((prev) =>   prev + 1);
  };
  const handleDecrement = () => {
    setCounter(() => counter - 1);
  };

  const handleReset = () => {
    setCounter(initialvalue);
  };

  return {
    value: counter,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onReset : handleReset
  };
};

export default useCounter;