import create from 'zustand';
// const saved = localStorage.getItem("listItem")
const useStore = create((set) => ({
  listItem: '',
    //  saved ? JSON.parse(saved) : []
   
 
   addItem:(item)=>(set(state=>(
  
   {listItem:
      [...state.listItem, item]
        
      },
      localStorage.setItem("listItem",JSON.stringify(
        
        )   )))



   
   )})
  );

export default useStore;