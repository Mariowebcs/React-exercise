import React, { useMemo } from "react";

const data = [
  {
    name: "Mario",
    id: crypto.randomUUID(),
    age: 27,
  },
  {
    name: "Federica",
    id: crypto.randomUUID(),
    age: 23,
  },
  {
    name: "Giada",
    id: crypto.randomUUID(),
    age: 28,
  },
  {
    name: "Federico",
    id: crypto.randomUUID(),
    age: 18,
  },
  {
    name: "Antonio",
    id: crypto.randomUUID(),
    age: 15,
  },
  {
    name: "Carlo",
    id: crypto.randomUUID(),
    age: 17,
  }
];

function filterData() {
  return data.filter((obj) => obj.age > 18);
}

const FilteredList = () => {
  const render = useMemo(() => JSON.stringify(filterData()), []);
  return <div>{render}</div>;
};

export default FilteredList;
