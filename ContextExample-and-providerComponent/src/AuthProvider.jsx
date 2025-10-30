import React, {useContext, useState } from 'react'

import { createContext } from 'react';
export const AuthContext = createContext();

function AuthProvider({children}) {

  const [auth,setAuth] = useState({username:"harshit" , email:"harshit@gmail.com"});
  return (
    <AuthContext.Provider value={{auth: auth, setAuth:setAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  return useContext(AuthContext);
}

export default AuthProvider