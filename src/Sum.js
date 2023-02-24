import React from "react";

const Sum = ({numbersArray = [5,7,6,9,8]}) => {
  const sum = numbersArray.reduce((t, c) => t + c, 0);
  return (
    <div>
      <h1>The sum is : {sum}</h1>
    </div>
  );
};

export default Sum;
