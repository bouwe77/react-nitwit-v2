import React from "react";

import Post from "./Post";

/**
 * Renders the given posts array.
 */
function Posts({ posts }) {
  return (
    <>
      {posts.length === 0 && "No posts yet..."}
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </>
  );
}

export default Posts;
