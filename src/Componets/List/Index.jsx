import React from 'react'
import Input from '../Input/Index'
import useStore from '../../UseStore/Index'
import './div.css'
function ListItem(){
   const closeItem = useStore((state) => state.closeItem);
  const listItem = useStore(state =>state.listItem);
 
  console.log(listItem)
  function closeWindow(h){
    closeItem(closeItem(h) )
  }
  return (
   <div className='main'>
     {listItem.map((item)=>
     <div className='box' key={item.id}>
      <h1>{item.id }</h1>
      <p>{item.notice}</p>
      <button key={item.id} onClick={()=>closeWindow(item.id)}>close</button>
     </div>)}
   </div>
  )}

export default ListItem