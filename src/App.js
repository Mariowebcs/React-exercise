import React from "react";
import { Routes, Route, } from "react-router-dom";
import Welcome from "./Welcome";
import ClickCounter from "./ClickCounter";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name="Giada" />} />
        <Route path="/ClickCounter" element={<ClickCounter />} />
      </Routes>
    </div>
  );
};

export default App;
