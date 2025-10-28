// App.jsx
import React, { useState,useEffect } from "react";
import Timer from "./Timer";
import FetchData from "./FetchData/FetchData";
import FetchDataExample from "./FetchData/FetchDataExample";
import CleanUpDemo from "./CleanUpDemo/CleanUpDemo";

function App() {
  // const [show, setShow] = useState(true);

  const[showComponent , setShowComponent] = useState(true);

  return (
    <div>
      {/* <button onClick={() => setShow(!show)}>
        {show ? "Stop Timer (Unmount)" : "Start Timer (Mount)"}
      </button> */}

      {/* {show && <Timer />}   ✅ yehi actual unmount/mount karega */}

      {/* <FetchData/> */}
    
      <label htmlFor="">show Component</label>
      <input type="checkbox" checked ={showComponent} onChange={()=> setShowComponent(!showComponent)}/>
      {/* {showComponent && <CleanUpDemo/>}  */}
      {showComponent &&<FetchDataExample/> }
      
    </div>
  );
}

export default App;
