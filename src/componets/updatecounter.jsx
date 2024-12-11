import { CounterContext } from "./counter";
import { CounterProvider } from "./counter";
import { useContext, useState } from "react";


export const Counter =()=>{
    const {count,increment,decrement,reset}=useContext(CounterContext);

   



    return (



        
        <div className="counter-container">
          <div className="info-reset">
            <button className="info-button">i</button>
            <button className="reset-button" onClick={reset}>
              ↻
            </button>
          </div>
          <div className="counter-display">{count}</div>
          <div className="counter-controls">
            <button className="increment-button" onClick={increment}>
              +
            </button>
            <button className="decrement-button" onClick={decrement}>
              -
            </button>
          </div>
        </div>
      );
    };
    

