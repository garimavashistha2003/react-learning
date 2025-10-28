import React from 'react'
import { useState } from 'react';

function RedundantState() {

    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    // const[fullName , setFullName] = useState('');
    const fullName = firstName + ' ' + lastName;

    function changeFirstName(e){
        setFirstName(e.target.value);
        // setFullName(e.target.value + ' ' + lastName);
    }
    function changeLastName(e){
        setLastName(e.target.value);
        // setFullName(firstName + ' ' + e.target.value);
    }

  return (
    <div>
        <h1>Let's Check you in </h1>

        <label>
            First Name:{''} 
            <input type="text" value={firstName} onChange={changeFirstName}/>
        </label>
        
        <br />
        <label>
            Last Name:{''} 
        <input type="text" value={lastName} onChange={changeLastName} />

        </label>
        <h2>Your ticket will be issued to: {fullName}</h2>
       

    </div>
  )
}

export default RedundantState