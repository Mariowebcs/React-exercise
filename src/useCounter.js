import { React, useCallback, useState } from "react";

const useCounter = ({ initialvalue }) => {
  const [counter, setCounter] = useState(initialvalue);

  const handleIncrement = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);
  
  const handleDecrement = useCallback(() => {
    setCounter((prev) => prev - 1);
  }, []);

  const handleReset = useCallback(() => {
    setCounter(initialvalue);
  }, [initialvalue]);

  return {
    value: counter,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onReset: handleReset,
  };
};

export default useCounter;
