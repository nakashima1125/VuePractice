import { useState } from "react";

const Example = () => {
  const animals = ["Dog", "Cat", null, "Rat"];

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            const animalStr = animal ?? "";
            const isMatch = animalStr.indexOf(filterVal) !== -1;
            return isMatch;
          })
          .map((animal) => {
            return (
              <li key={animal}>
                {animal ?? "nullですいません"}
                {/* animal {animal === "Dog" && "★"} */}
                {animal === "Dog" ? "★" : ""}
              </li>
            );
            // if (animal === "Dog") {
            //   return <li key={animal}>{animal}🌟</li>;
            // } else {
            //   return <li key={animal}>{animal}</li>;
            // }
          })}
      </ul>
    </>
  );
};

export default Example;
