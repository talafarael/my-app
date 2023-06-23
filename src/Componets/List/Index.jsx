import React from 'react'
import Input from '../Input/Index'
import useStore from '../../UseStore/Index'
import './div.css'
import { useState } from 'react'
function ListItem(){
  const[activ,setactive]=useState('changeoff')
  const closeItem = useStore((state) => state.closeItem);
  const listItem = useStore(state =>state.listItem);
  const changechexItem = useStore((state) => state.changechexItem);
  const[val1,setval1]=useState('')
  const[id1,setid1]=useState('')
  const[val2,setval2]=useState('')
  const changeItem = useStore((state) => state.changeItem);
  console.log(listItem)
  function closeWindow(h){
    closeItem(closeItem(h) )
  }
   function addclas(e){
    setactive('changeon')
    const arr=listItem.filter((item)=>item.id==e) 
    setval1(arr[0].title)
    setval2(arr[0].notice)
    setid1(arr[0].id)
 
   }
   const changeunput1=(a)=>{
    setval1(a.target.value);
  }
  const changeunput2=(a)=>{
    setval2(a.target.value);
  }
  let arry = {
    id:id1 ,
    title: val1 ,
    notice: val2 ,
  };
function cahngeButton(){
  const arr=listItem.findIndex(arr=> arr.id==id1)
    changeItem(arr,arry )
    setactive('changeoff')
  }
  function handleCheckboxChange(h){
    const arr=listItem.findIndex(arr=> arr.id==h)
    changechexItem(arr)
  }
  return (
   <div className='main'>
    <div className={activ}>
      <input type="text" value={val1} onChange={changeunput1}/>
      <input type="text" value={val2} onChange={changeunput2}/>
      <button onClick={cahngeButton}>change</button>
      </div>
     {listItem.map((item)=>
    
     <div className='box' key={item.id}>
      <h1 style={item.inpurstate ? { color: 'red', textDecoration: 'line-through', } : {}}>{item.title }</h1>
      <p style={item.inpurstate ? { color: 'red', textDecoration: 'line-through', } : {}} >{item.notice}</p>
      <button onClick={()=>addclas(item.id)}></button>
      <input type="checkbox" checked={item.inpurstate} onChange={()=>handleCheckboxChange(item.id)}/>
      <button  onClick={()=>closeWindow(item.id)}>close</button>
     </div>)}
   </div>
  )}

export default ListItem