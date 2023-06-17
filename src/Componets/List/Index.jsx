import React from 'react'
import Input from '../Input/Index'
import useStore from '../../UseStore/Index'
function ListItem(){
  const listItem = useStore(state => state.listItem);

  console.log(listItem)

  return (
   <ul>
     
   </ul>
  )}

export default ListItem