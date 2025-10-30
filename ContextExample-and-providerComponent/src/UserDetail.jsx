import React from 'react'
// import { useContext } from 'react'
// import { AuthContext } from './AuthProvider'
import { useAuth } from './AuthProvider';


function UserDetail() {
  // const {username, email} = useAuth();
  const {auth,setAuth} = useAuth();

  return (
    <div>
        <h1>username: {auth.username}</h1>
        <h1>email : {auth.email}</h1>
        

    </div>
  )
}

export default UserDetail