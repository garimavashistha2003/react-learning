import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import { createContext } from 'react'


export const MyAppContext  = createContext();
function myFunc(){
  console.log("hello from myFunc");
}

createRoot(document.getElementById('root')).render(

  <StrictMode>
      <MyAppContext.Provider value={{
      key1 : "value1",
      key2 : "value2", 
      someFunc: myFunc

    }} >

<App />


        
    
    </MyAppContext.Provider>
   
  </StrictMode>
)


