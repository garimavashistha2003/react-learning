import React from 'react'
import { useContext } from 'react'
import { MyAppContext } from './main'


function GrandChild() {
    // const Func= useContext(MyAppContext);
    const {someFunc} = useContext(MyAppContext);
    // console.log(myFunc);
  return (
    <div style={{
        padding : "2rem",
        backgroundColor : "#FFBD97"

    }}>
        <h3>Grand child </h3>
        <button onClick={someFunc} > call my func</button>

    </div>
  )
}

export default GrandChild