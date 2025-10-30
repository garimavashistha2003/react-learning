import React from 'react'
import UserDetail from './UserDetail'
import {useAuth} from "./AuthProvider"


function UserProfile() {

  const {auth, setAuth} = useAuth();
  function handleLogin() {
    setAuth({username: "garima", email : "garima@gmail.com"})
  }
  return (
    <div>
      <h1>User Profile </h1>
        { auth.username ? <UserDetail/> : <button onClick = {handleLogin}>Login</button>}

    </div>
    
  )
}

export default UserProfile