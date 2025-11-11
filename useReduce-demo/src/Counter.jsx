
import React, { useReducer } from 'react'

const initialState = {count:0};

const counterReducer = (state,action)=>{
    if(action.type === "INCREAMENT"){
        return {...state, count : state.count+1}
    }
    if(action.type === "RESET"){
        return {count : 0}
    }
    if(action.type === "DECREAMENT"){
        return {...state, count : state.count-1}
    }
}

function Counter() {

    const [state,dispatch] = useReducer(counterReducer,initialState);

    const handleIncrease = ()=>{
        dispatch({
            type : "INCREAMENT"
        })
    }

        const handleReset = ()=>{
        dispatch({
            type : "RESET"
        })
    }

        const handleDecrease = ()=>{
        dispatch({
            type : "DECREAMENT"
        })
    }


  



  return (
    <div>
        <h1>Counter</h1> <hr />
        <h1>{state.count}</h1>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrease}>Decrease</button>


    </div>
  )
}

export default Counter