import React, { useState } from "react";
import { useEffect } from "react";
import useStore from "../../UseStore/Index";
import { notes } from "../../common/notes";

function Index() {

  const addItem = useStore((state) => state.addItem);
 
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const [random, setrandom]=useState(Math.floor(Math.random()*10000))
  let arr = {
    id: random,
    title: value,
    notice: value2,
    inpurstate:false,
  };



  const inputHandler = (e) => {
    setValue(e.target.value);
  };
  function clickButton() {
 
   setrandom(Math.floor(Math.random()*10000))
    setValue("");
    addItem(arr)
    setValue2("");
 
  }
  const inputHandler2=(a)=>{
    setValue2(a.target.value);
  
  }
 
  return (
    <div>
      <input value={value} onChange={inputHandler} />
      <input value={value2} onChange={inputHandler2} />
      <button onClick={clickButton}>click</button>
     
    </div>
  );
}

export default Index;
