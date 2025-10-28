import React, { useEffect, useState } from 'react'

function Demo() {
    const [count , setCount] = useState(0);
    const[text , setText] = useState("")
    useEffect (()=> {
        console.log("mounted with no dependency")
        console.log('counter changed : ' + count + " " + "text is : " + text );
    }) 

    useEffect (()=> {
        console.log("mounted with empty dependency")
        console.log('counter changed : ' + count + " " +"text is : " + text);
    },[])
    
    useEffect (()=> {
        console.log("mounted with having text dependency ")
        console.log('counter changed : ' + count +" " + "text is : " + text);
    },[text]) 


  return (
    <>
   
    <h1>{count}</h1>
    <button onClick={()=>{setCount(count+1)}}>Change count</button>
    {/* <input onClick={(e)=>{setText(e.target.value)}}>{text}</input> */}
    <h2>Text: {text}</h2>
      <input
        type="text"
        placeholder="Type something"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

    </>
  )
}

export default Demo