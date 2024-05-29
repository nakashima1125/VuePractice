import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const [filterval, setFilterval] = useState("");
  return (
    <>
      <h3>配列のフィルター</h3>
      <input
        type="text"
        value={filterval}
        onChange={(e) => setFilterval(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => animal.indexOf(filterval) !== -1)
          .map((animal) => (
            <li key={animal}>{animal}</li>
          ))}
      </ul>
    </>
  );
};

export default Example;
