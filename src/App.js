import React from "react";
import CarDetails from "./CarDetails";

const App = () => {
  return (
    <div>
      <CarDetails
        initialdata={{ model: "Ford focus", year: 2021, color: "green" }}
      />
    </div>
  );
};

export default App;
