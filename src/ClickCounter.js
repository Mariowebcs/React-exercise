import useCounter from "./useCounter";

const ClickCounter = ({ initialvalue }) => {
  const { value, onIncrement, onDecrement, onReset } = useCounter({
    initialvalue,
  });

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={onIncrement}>Add</button>
      <button onClick={onDecrement}>Remove</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default ClickCounter;
