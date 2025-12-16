import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
function RootLayouts() {
  return (
    <div>
      <h1>Nav</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(obj) => {
                return obj.isActive ? "activeNav" : null;
              }}
            >
              {" "}
              Home
            </NavLink>
            {/* class active aa jayegi NavLink se  */}
          </li>
          <li>
            <Link to="/about"> About</Link>
          </li>
          <li>
            <Link to="/contact"> Contact</Link>
          </li>
          <li>
            <Link to="/Posts"> Posts</Link>
          </li>
        </ul>
      </nav>

      <main>
        <h1>Main content </h1>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayouts;
