//step - 1
//import 4 things

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Home, About, Posts, Error, Contact } from "./Pages";
import RootLayouts from "./layouts/RootLayouts";

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
      <Route path="/posts" element={<Posts />} />
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
