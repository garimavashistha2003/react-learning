import React, { useEffect, useState } from 'react'
import axios from "axios";

function UserListAxios() {

    const [users , setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (()=> {

        

            const fetchData = async() =>{
                try{
                    const userdata = "https://jsonplaceholder.typicode.com/users";
                    const {data} = await axios.get(userdata);
                    setUsers(data);
                    // setLoading(false); // stop loading after data fetched 
                    
               }catch(err){
                console.error(err)
                    setError(err.message);
               }
                finally {
                    setLoading(false); // always run
                }
            }

         fetchData();

    }, []);

    if(error){
        return <h2> Error : {error}</h2>
    }


    if(loading ){
        return <h2>Loading Users......</h2>
    }
    

  return (
    <div>
    <h1>UserList</h1>
    {users.map((user)=>(
        <div key={user.id}>
            <h3>{user.id}</h3>
            <h3>{user.name}</h3>
        </div>
    ))}
    </div>

  );
  
}


export default UserListAxios