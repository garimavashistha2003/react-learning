//step - 1
//import 4 things

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import {
  Home,
  About,
  Posts,
  Error,
  Contact,
  PostDetail,
  Loggin,
} from "./Pages";
import RootLayouts from "./layouts/RootLayouts";
import RequireAuth from "./Components/RequireAuth";

//step - 2
// create router

//createRoutesFromElements() -- function

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts />}>
      <Route index element={<Home />} />
      {/* index route parent route ka default child hota hai. */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/loggin" element={<Loggin />} />
      <Route
        path="/posts"
        element={
          <RequireAuth>
            {" "}
            <Posts />{" "}
          </RequireAuth>
        }
      />
      <Route path="/posts/:id" element={<PostDetail />} />

      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

// 👉 element ka matlab:

// Match hone par kaunsa React component dikhana hai

// 👉 path="/about" ka matlab:

// Jab URL me /about hoga

// Tab ye route match karega
