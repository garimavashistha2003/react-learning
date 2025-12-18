import React from "react";
import { Navigate } from "react-router-dom";

function RequireAuth({ children }) {
  const loggedIn = true;
  if (loggedIn) {
    return children;
  }
  return <Navigate to={"/loggin"} />;
}

export default RequireAuth;
