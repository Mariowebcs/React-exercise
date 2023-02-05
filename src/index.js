import React from 'react'
import ReactDOM  from 'react-dom'

const printName = (name) => <h1>Hello,{name}</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(printName('Mario'));