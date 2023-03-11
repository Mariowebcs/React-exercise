import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";

const App = () => {
  return (    
      <Routes>
        <Route path="/" element={<Welcome name="Giada" />} />
      </Routes>
  );
};

export default App;
