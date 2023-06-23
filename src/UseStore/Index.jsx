import create from 'zustand';
const saved = localStorage.getItem("listItem")
const useStore = create((set,get) => ({
  listItem: saved ? JSON.parse(saved) : [] ,
    //  saved ? JSON.parse(saved) : []
   
    closeItem:(id)=>{set(state=>( 
    
      {listItem : state.listItem.filter((g)=>g.id!==id)}),
      localStorage.setItem("listItem",JSON.stringify(get().listItem))
    ,
    console.log(get().listItem)
     )},
    
   addItem:(item)=>{set(st=>(
   
  

   {listItem:
      [...st.listItem, item]}) )
      , localStorage.setItem("listItem",JSON.stringify(get().listItem)   )
      
    },
    changeItem:(change,title)=>{set(  str=>
    
      {
       const updatedItems = [...str.listItem];
       updatedItems[change]=title
       return { listItem: updatedItems };
     
    }
     
 
        
    
          
       
   ), localStorage.setItem("listItem",JSON.stringify(get().listItem)   )}
  })
 
  );

export default useStore;