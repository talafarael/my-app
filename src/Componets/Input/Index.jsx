import React, { useState } from "react";
import { useEffect } from "react";
import useStore from "../../UseStore/Index";
import { notes } from "../../common/notes";

function Index() {
  const savedState = localStorage.getItem("myArrayState");
  const addItem = useStore((state) => state.addItem);
  const [list, setList] = useState(savedState ? JSON.parse(savedState) : []);
  const [value, setValue] = useState();
  localStorage.setItem("myArrayState", JSON.stringify(list));
  const saveItem = useStore((state) => state.saveItem);
  let arr = {
    id: 0,
    title: value,
    notice: "",
  };

  const inputHandler = (e) => {
    setValue(e.target.value);
  };
  function clickButton() {
    setList([...list, arr]);
 
    setValue("");
    addItem(arr)
    
    console.log(list);
  }
  
     
  return (
    <div>
      <input value={value} onChange={inputHandler} />
      <input />
      <button onClick={clickButton}>click</button>
      <h1>{value}</h1>
    </div>
  );
}

export default Index;
