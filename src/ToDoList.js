import React, { useState } from "react";
const Stat_items = ["Learn React native", "Work a lot", "Study"];

const ToDoList = () => {
  const [items, setItems] = useState(Stat_items);
  const [item, setItem] = useState("");

  const changeInputHandler = (event) => {
    const value = event.target.value;
    setItem(value);
  };

  const clickHandler = () => {
    if (!items.includes(item)) {
      setItems((prevState) => {
        return [item, ...prevState];
      });
    } else {
      alert("Elemento già presente nella lista. Impossibile aggiungere");
    }
    setItem("");
  };

  const removeItem = (idx) =>{
    const copy = [...items];
    copy.splice(idx,1);
    setItems(copy);
  }

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li  key={items.indexOf(item)}>{item}
          <button onClick={removeItem}>remove</button>
          </li>
        ))}
      </ul>
      <input type="text" onChange={changeInputHandler} value={item} />
      <button type="button" onClick={clickHandler}>
        Add item
      </button>
    </div>
  );
};

export default ToDoList;
