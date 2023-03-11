import React from "react";
import { Routes, Route,Link } from "react-router-dom";
import Welcome from "./Welcome";
import ClickCounter from "./ClickCounter";
import GithubUser from "./GithubUser";

const App = () => {
  return (
    <div>
    <Link to="/">Home</Link>
    <Link to="/ClickCounter">ClickCounter</Link>
    <Link to="/users/Mariowebcs">Github User Details</Link>
      <Routes>
        <Route path="/" element={<Welcome name="Giada" />} />
        <Route path="/ClickCounter" element={<ClickCounter />} />
        <Route path="/users/:username" element={<GithubUser/>} />
        <Route path="*" element={<div><p>Not found</p></div>}/>
      </Routes> 
    </div>
  );
};

export default App;