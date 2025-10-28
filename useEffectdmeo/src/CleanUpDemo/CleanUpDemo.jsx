import React, { useEffect, useState } from 'react'

function CleanUpDemo() {
    const[counter, setCounter] = useState(0);

    useEffect(()=>{
        console.log("hello useEffect")
        return function(){
            console.log("cleanup function")
        }
    },[counter])

    function incCounter(prev){
        setCounter(prev => prev+1);
    }

  return (
    <div>
        <div>
            <h1>{counter}</h1>
            <button onClick={incCounter}>Increase</button>
        </div>
    </div>
  )
}

export default CleanUpDemo