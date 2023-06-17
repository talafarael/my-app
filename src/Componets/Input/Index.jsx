import React, { useState } from 'react'
import { useEffect } from 'react'
// import { useState } from 'react'
import { notes } from '../../common/notes'



function Index() {
  const savedState = localStorage.getItem('myArrayState');


   const [list,setList]=React.useState(savedState ? JSON.parse(savedState):[])
   const[value ,setValue]=React.useState()
   const listItem =list
    console.log(list)
    let arr={
    id:0,
    title:value,
    notice:'',
  }
   
    const inputHandler = (e) => {
      setValue(e.target.value) 
    } 
    function clickButton(){  setList([...list ,arr])
      localStorage.setItem('myArrayState', JSON.stringify(list));
    setValue('')
   
    
    console.log(list)
      
    } return (
    <div>
        <input value={value} onChange={inputHandler} />
        <input/>
        <button onClick={clickButton}>click</button>
       <h1>{value }</h1>
    </div>
  )
}

export default Index 