import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return <h4>please login</h4>
  return (
    <div>
        <h4>Welcome {user.userName}</h4>
    </div>
  )
}

export default Profile