// import { useState } from "react"


// function App() {

//   const [state , setState] = useState({count:0});

//   const handleInc =  () => {
//       setState((prev) => ({...prev , count : prev.count+1}))
//   }

//   const handleReset =  () => {
//     setState((prev) => ({...prev , count : 0}))
//   }

//   const handleDec =  () => {
//     setState((prev) => ({...prev , count : prev.count-1}))
    
//   }

//   return (
//     <>
//       <h1>Counter</h1>
//       <hr />
//       <h1>{state.count}</h1>
//       <button onClick={handleInc}>Increase</button>
//       <button onClick={handleReset}>Reset</button>
//       <button onClick={handleDec}>Decrease</button>
      

//     </>
//   )
// }

// export default App







// using use reducer 


// useReducer() --  return --> state , dispatch (function to upfdate that state)
// useReducer() -- input kya lega? --->  reducer function , initialState
//dispatch --- we pass object(action ) as an argument  
//then dispatch call krega reducer ko 

//reducer --> accept 2 things --> state , action


import {  useReducer } from "react"
const initialState = {count:0};

function reducer(state, action ){
  if(action.type === 'INCREMENT'){
    return {...state ,count :  state.count+1}
  }
  if(action.type === 'RESET'){
    return {...state ,count :  0}
  }
  if(action.type === 'DECREMENT'){
    return {...state ,count :  state.count-1}
  }

}

function App() {

const [state,dispatch]= useReducer(reducer, initialState );

  const handleInc =  () => {
      dispatch({
        type : "INCREMENT"
      })
  }

  const handleReset =  () => {
    dispatch({
      type : "RESET"
    })
  }

  const handleDec =  () => {
    dispatch({
      type : "DECREMENT"
    })
    
  }

  return (
    <>
      <h1>Counter</h1>
      <hr />
      <h1>{state.count}</h1>
      <button onClick={handleInc}>Increase</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDec}>Decrease</button>
      

    </>
  )
}

export default App