import React from "react";
import { Link } from "react-router-dom";

function Post({ id, title }) {
  return (
    <div style={{ margin: "1rem", padding: "1rem", border: "1px solid black" }}>
      <Link to={id.toString()}>
        <h2>title: {title}</h2>
      </Link>
      <p>id : {id}</p>
    </div>
  );
}

export default Post;
