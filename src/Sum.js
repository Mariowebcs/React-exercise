import React from "react";

const Sum = (props) => {
  const sum = props.numbers.reduce((t, c) => t + c, 0);
  return (
    <div>
      <h1>The sum is : {sum}</h1>
    </div>
  );
};

export default Sum;
