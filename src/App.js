import React from "react";
import { Routes, Route, } from "react-router-dom";
import Welcome from "./Welcome";
import ClickCounter from "./ClickCounter";
import GithubUser from "./GithubUser";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name="Giada" />} />
        <Route path="/ClickCounter" element={<ClickCounter />} />
        <Route path="/users/:username" element={<GithubUser/>} />
      </Routes> 
    </div>
  );
};

export default App;
