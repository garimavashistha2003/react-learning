import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const url = "https://jsonplaceholder.typicode.com/posts";

function PostDetail() {
  const { id } = useParams();
  console.log(id);
  const [post, setPost] = useState(null);
  async function fetchPost() {
    const res = await fetch(`${url}/${id}`);
    const data = await res.json();
    console.log(data);
    setPost(data);
  }

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <>
      {post && (
        <>
          {" "}
          <h1>{post.title}</h1>
          <p>{post.body}</p>{" "}
        </>
      )}
    </>
  );
}

export default PostDetail;
