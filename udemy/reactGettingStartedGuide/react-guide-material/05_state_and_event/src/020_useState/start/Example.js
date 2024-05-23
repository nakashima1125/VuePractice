import { useState } from "react";
const Example = () => {
  let [val, setVal] = useState('');
  return (
    <>
    <input type="text" 
    onChange={(e) =>{
      const setFn = setVal
      setFn(e.target.value)}}/>
    
      ={val[0]}
    </>
  );
};

export default Example;
