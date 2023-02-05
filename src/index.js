import React from "react"
import reactDOM from "react-dom"

const sum = (a,b) => <h2>{a+b}</h2>;

const root = reactDOM.createRoot(document.getElementById('root'));

root.render(sum(5,6));