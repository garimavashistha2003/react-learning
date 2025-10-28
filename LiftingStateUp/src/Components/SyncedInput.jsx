import React from 'react'
import InputUser from "./InputUser";
import { useState } from 'react';


function SyncedInput() {
    const [firstText , setFirstText ] = useState(' ');
    const [secondTtext , setSecondText ] = useState(' ');

    function handleChange1(e){
        setFirstText(e.target.value)
    }

    function handleChange2(e){
        setSecondText(e.target.value)
    }
  return (
    <>
      <InputUser label="First Input" value={firstText} onChange={handleChange1}/> <br /> <br />
      <InputUser label="Second Input" value={secondTtext} onChange={handleChange2}/>
      
      
      
    </>
  )
}

export default SyncedInput