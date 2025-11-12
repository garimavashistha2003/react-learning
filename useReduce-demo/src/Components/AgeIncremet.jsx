import React, { useReducer } from 'react'
import { ageReducer } from '../Reducer/AgeReducer';
const initialState = { name: '', age: 0 };

function AgeIncremet() {
    const [state,dispatch] = useReducer(ageReducer, initialState);

    const handleNameChange = (e)=>{
        dispatch({
            type : "change-name",
            payload :e.target.value   
        })
    }

    const handleAgeChange = (e)=>{
        dispatch({
            type : "change-age",
            payload :e.target.value      
        })
    }

    const handleIncAge = () =>{
        dispatch({
            type:"increase-age",
        })
    }

  return (
    
    <div>
        <input type="text" value={state.name} 
        onChange={handleNameChange}
        /> 
        <br />

        <input type="number" value={state.age} 
        onChange={handleAgeChange}
        /> 

        <br />


        <button onClick={handleIncAge}>Increment Age</button> <br /> <hr />

        <p>hello, {state.name} , you're {state.age} years old </p>

    </div>
  )
}

export default AgeIncremet