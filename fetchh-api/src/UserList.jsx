import React, { useEffect, useState } from 'react'

function UserList1() {

    const [users , setUsers] = useState([]);
s
    const [error, setError] = useState(null);

    useEffect (()=> {

            const fetchData = async() =>{
                try{
                    const userdata = "https://jsonplaceholder.typicode.com/users";
                    const res = await fetch(userdata);
    
                    if(!res.ok){
                        throw new Error(`HTTP error ! Status:  ${res.status}`)
                    }

                const data = await res.json();
                setUsers(data);
                setLoading(false); // stop loading after data fetched 

                }        catch(err){
                    setError(err.message);
                }
            }

        fetchData();

    }, []);

    if(error){
        return <h2> Error : {error}</h2>
    }


    if(loadind ){
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


export default UserList



