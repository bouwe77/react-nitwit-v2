import React from "react";

import Post from "./Post";

/**
 * Renders the given posts array.
 */
function Timeline({ posts }) {
  return (
    <>
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </>
  );
}

export default Timeline;
