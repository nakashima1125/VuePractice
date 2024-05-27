import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj)
  const chgName =(e) =>{setPerson({name: e.target.value, age:person.age})}
  const chgAge =(e) =>{
    setPerson({...person, age:e.target.value})}
  // const chgAge =(e) =>{setPerson({name: person.name, age:e.target.value})}
  const reset = () =>{
    setPerson({name:"", age:""})
  }

  return(
    <>
    <h3>Name:{person.name}</h3>
    <h3>Age:{person.age}</h3>
    <input type="text" value={person.name} onChange={chgName}></input>
    <input type="number" value={person.age} onChange={chgAge}></input>
    <div>
      <button onClick={reset}>リセット</button>
    </div>
    </>
  )
};

export default Example;
