import React, { useEffect } from 'react'
import { useState } from 'react';


function InputDebouncing() {

    const [text, setText] = useState("");
    const [debouncedText, setDebouncedText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);   
        // console.log(e.target.value);
    }


    useEffect(()=> {
        const timer = setTimeout(()=>{
            setDebouncedText(text);
            console.log(text);
        }, 500)

        return () => clearTimeout(timer);
    },[text])

    return (
        <div>
            <h1>Type Somethinggg....</h1>
            <input type="text" value = {text} onChange={handleChange} placeholder='type here....'/>
            <p>You typed: {text}</p> 
        </div>
    )

  }

export default InputDebouncing