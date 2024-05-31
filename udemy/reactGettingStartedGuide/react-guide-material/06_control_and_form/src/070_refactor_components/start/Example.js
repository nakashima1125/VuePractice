import { useState } from "react";
import AnimalList from "./component/AnimalList";
import { AnimalFilter } from "./component/AnimalFilter";
const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];
  const [filterVal, setFilterVal] = useState("");
  const filteredAnimals = animals.filter((animal) => {
    const isMatch = animal.indexOf(filterVal) !== -1;
    return isMatch;
  });
  return (
    <>
      <AnimalFilter filterState={[filterVal, setFilterVal]} />
      <AnimalList animals={filteredAnimals} />
    </>
  );
};

export default Example;
