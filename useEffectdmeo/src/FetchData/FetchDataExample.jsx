
import React, { useEffect, useState } from 'react'
import User from './User';
const url = "https://jsonplaceholder.typicode.com/users";


function FetchDataExample() {

    const [users , setUsers] = useState([]);
    const[error, setError] = useState(null);
    const [loading, setLoading] = useState(true);



    // const fetchData = async() => {
    //     try {
    //         const response = await fetch(url);
    //         if(!response.ok){
    //             throw new Error(`${response.status}`)
    //         }
    //         const data = await response.json();
    //         // console.log(data);
    //         setUsers(data);
            
    //     } catch (err) {
    //         setError(err.message)
    //     }finally{
    //         setLoading(false);
    //     }
    // }



    // AbortController ek controller object deta hai jisme signal hota hai.

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;
        const fetchData = async ()=>{
            const response = await fetch(url , {signal:signal});
            const data = await response.json();
            console.log(data);
            setUsers(data);
            setLoading(false);
        }
        fetchData();

         //clean up function 
        return ()=>{
            console.log("aborting request ");
            controller.abort();
        }


    },[])

    if(error){
        return <h2>Error : {error}</h2>
    }

    if(loading){
        return <h1>Loading users......!!</h1>
    }

  return (
    <div>
    {users.map((user)=> 
        // <p key={user.id}> {user.name}</p>
        <User key = {user.id} {...user}/>
    )}
    </div>
  )

}



export default FetchDataExample

