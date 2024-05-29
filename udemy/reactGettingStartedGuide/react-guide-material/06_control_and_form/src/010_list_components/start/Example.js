
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const animalList = []
  for(const animal of animals){
    animalList.push(<li>{animal}</li>)
  }
  // const helloAnimals = animalList.map((animal) => <li>Hello, {animal}</li>)
  return (

    <>
      <h3>配列の操作</h3>
      <ul>
        {animalList}  
        {animals.map((animal) => <li>Hello, {animal}</li>)}
        {/* {helloAnimals}   */}
      </ul>
    </>
  );
};

export default Example;
