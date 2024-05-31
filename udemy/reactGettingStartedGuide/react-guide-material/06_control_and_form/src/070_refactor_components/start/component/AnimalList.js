import { useState } from "react";
import AnimalItem from "./AnimalItem";
const AnimalList = ({ animals }) => {
  if (animals.length === 0) {
    return <h3>見つかりません</h3>;
  }
  return (
    <ul>
      {animals.map((animal) => {
        return <AnimalItem animal={animal} key={animal} />;
      })}
    </ul>
  );
};

export default AnimalList;
