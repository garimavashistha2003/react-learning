import React, { useEffect, useState } from 'react'

function Timer() {
    const[show , setShow] = useState(true);
    useEffect(()=>{
        console.log("Effect mounted: starting timer");

        const timer = setInterval(()=>{
            console.log("tick")
        },1000)

        return () => {
            clearInterval(timer);
            console.log("cleanup done")
        }

    },[])
  return (
    <div>

    </div>
  )
}

export default Timer