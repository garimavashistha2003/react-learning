

import React, { useState } from 'react'

export default function User() {

    // const [firstName, setFirstName] = useState("garima");
    // const [lastName, setlastName] = useState("sharma");

    const [user, setUser] = useState({firstName:"garima", lastName:"vashistha"})



    function updateName(){
        // setFirstName("mohit");
        // setlastName("vashistha")
        setUser({
            firstName:"Harshit",
            lastName:"sharma"
        })

    }



  return (
    <div>
        <h1>{user.firstName} {user.lastName}</h1>
        <button onClick={updateName}>change name </button>
    </div>
  )
}
