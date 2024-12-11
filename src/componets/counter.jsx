import { createContext, useState } from "react";


export const CounterContext = createContext();

// make the warehhouse 

export const CounterProvider = ({children})=>{
const [count ,   setCount]= useState(0);

// actios wwwe want to perfrom

const increment = ()=>{setCount(count+1)}
const decrement = ()=>{setCount(count-1)}
const reset = ()=>{setCount(0)}

return(<CounterContext.Provider value ={{count,increment,decrement,reset}}>{children}</CounterContext.Provider>)
}
