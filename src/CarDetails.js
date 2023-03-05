import React from "react";
import { useRef } from "react";

const CarDetails = ({ initialdata }) => {
  const _formRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const dataObj = {
      model: _formRef.current.model.value,
      year: _formRef.current.year.value,
      color: _formRef.current.color.value,
    };
    _formRef.current.reset();
    console.table(dataObj);
  };

  return (
    <div>
      <form action="" ref={_formRef} onSubmit={submitHandler}>
        <input type="text" name="model" defaultValue={initialdata.model} />
        <input type="text" name="year" defaultValue={initialdata.year} />
        <input type="text" name="color" defaultValue={initialdata.color} />
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
};

export default CarDetails;
