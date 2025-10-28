import React from 'react'

function User({id,name,username,email,address}) {
  return (
    <div>
        <h4>id : {id}</h4>
        <h4>name : {name}</h4>
        <h4>username : {username}</h4>
    </div>
  )
}

export default User