import create from 'zustand';
const saved = localStorage.getItem("myArray");
const useStore = create((set) => ({
    listItem: saved ? JSON.parse(saved) : []

    ,
 
   addItem:(item)=>(set(state=>(
   ,
    {   listItem:
      [ ...state.listItem,
        item]
        
      }
     
   
  )))


   
    
  }));

export default useStore;