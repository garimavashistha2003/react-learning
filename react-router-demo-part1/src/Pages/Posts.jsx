import React, { useEffect, useState } from "react";
import Post from "../Components/Post";
const url = "http://jsonplaceholder.typicode.com/posts";
function Posts() {
  const [posts, setPosts] = useState(null);
  async function fetchPosts() {
    const res = await fetch(url);
    const data = await res.json();
    setPosts(data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      {posts &&
        posts.map((post) => (
          <Post key={post.id} id={post.id} title={post.title} />
        ))}
    </>
  );
}

export default Posts;
