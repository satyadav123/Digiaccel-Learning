import {createContext,useState} from 'react';
export const CreateContext=createContext();

export const ContextProvider=({children})=>{
    const [setcard,updatecard]=useState("");
     const Handlecart=((val)=>{
     updatecard(val);
    })
    return <CreateContext.Provider value={{setcard,Handlecart}}>
{children}
    </CreateContext.Provider>
}