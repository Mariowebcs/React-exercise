import React from "react";
import CarDetails from "./CarDetails";

const App = () => {
  return (
    <div>
      <CarDetails
        initialdata={{ model: "ferrari testa rossa", year: 1999, color: "red" }}
      />
    </div>
  );
};

export default App;
