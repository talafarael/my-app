import React, { useState } from 'react'
import { notes } from '../../common/notes'



function Index() {
   
    const inputHandler = (e) => {
        e.target.value 
    } 
    function clickButton(){

   }
  return (
    <div>
        <input onChange={inputHandler}/>
        <input/>
        <button onClick={clickButton}>click</button>

    </div>
  )
}

export default Index