
import React, { useReducer } from 'react'
import { formReducer } from '../Reducer/reducerForm';
const initialState = {name : "" , email: ""};
function Form() {
    const [state, dispatch] = useReducer(formReducer,initialState);

    const setName =(e) =>{
        dispatch({
            type : "SET-NAME",
            payload : e.target.value
        })
    }

        const setEmail =(e) =>{
        dispatch({
            type : "SET-EMAIL",
            payload : e.target.value
        })
    }

    const formReset = () =>{
        dispatch({
            type : "RESET"
        })
    }
     

  return (
    <div>
        <h1>FORM</h1>
        <label htmlFor="">Name : </label> {' '}
        <input type="text" value={state.name} onChange={setName}/> <br /> <br />


        <label htmlFor="">Email : </label> {' '}
        <input type="email" value={state.email} onChange={setEmail}/>  <br /> <br />

        <button onClick={formReset}>Reset</button>


        <h2>Current Form data: </h2>
        <p>
            Name: {state.name} <br />
            Email: {state.email}
        </p>
        
    </div>
  )
}

export default Form