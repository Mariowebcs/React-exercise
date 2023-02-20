import React from "react";
import Counter from "./Counter";

const App = () => {
  return (
    <div>
      <Counter value={0} increment={1} interval={1000}/>
    </div>
  );
};

export default App;
