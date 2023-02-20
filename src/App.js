import React from "react";
import ClickTracker from "./ClickTracker";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <ClickTracker />
    </div>
  );
};

export default App;
