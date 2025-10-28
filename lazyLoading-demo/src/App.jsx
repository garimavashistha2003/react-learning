



// without lazy loading
// App.jsx
import { useState } from "react";
import User from "./User";


function App() {
  const [load, setLoad] = useState(false);

  return (
    <>
      <h1>Without Lazy Loading</h1>
      <button onClick={() => setLoad(true)}>Show</button>
      {load ? <User /> : null}
    </>
  );
}

export default App;



 // App.jsx
// import { lazy, Suspense, useState } from "react";


// const User = lazy(() => import("./User")); // Lazy load

// function App() {
//   const [load, setLoad] = useState(false);

//   return (
//     <>
//       <h1>With Lazy Loading</h1>
//       <button onClick={() => setLoad(true)}>Show</button>
//       {load ? (
//         <Suspense fallback={<h1>Loading...</h1>}>
//           <User />
//         </Suspense>
//       ) : null}
//     </>
//   );
// }

// export default App;


