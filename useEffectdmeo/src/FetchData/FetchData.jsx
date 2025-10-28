import React from 'react'
import {useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/users";



function FetchData() {
    console.log("component rendered")

    //using promise 

    useEffect(()=>{
        fetch(url)
        .then((response)=> response.json())
        .then((data)=>{
            console.log(data);
        })
        .catch((error)=>{console.log(error)})


    },[])  
    
  return (
    <div>FetchData</div>
  )
}

export default FetchData