//step - 1
//import 4 things

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//step - 2
// create router

//createRoutesFromElements() -- function

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<h1>Home page... </h1>} />
      <Route path="/about" element={<h1>about page... </h1>} />
      <Route path="/contact" element={<h1>contact page... </h1>} />
      <Route path="/posts" element={<h1>postsssssss page... </h1>} />
      <Route path="*" element={<h1>Error page... </h1>} />
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
