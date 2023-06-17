import create from 'zustand';

const useStore = create((set) => ({
    listItem: '',
   addItem:(item)=>(set((state)=>(
   [ ...state.listItem,item]

   )))
    
  }));

export default useStore;