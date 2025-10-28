import React from 'react'
import CheckboxChild from './CheckboxChild'
import { useState } from "react"

function CheckboxParent() {
    const [checkedFirst , setCheckedFirst] = useState("");
    const [checkedSecond , setCheckedSecond] = useState("");


    function handleCheck1(){
        setCheckedFirst(!checkedFirst);
    }
    function handleCheck2(){
        setCheckedSecond(!checkedSecond);
    }
  return (
    <>
    <CheckboxChild label= "Option 1" checked={checkedFirst} onChange={handleCheck1}/> <br />
    <CheckboxChild label = "option 2" checked={checkedSecond}onChange={handleCheck2}/>
    </>
    
  )
}

export default CheckboxParent