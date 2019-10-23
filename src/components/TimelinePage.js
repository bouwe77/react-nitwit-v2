import React from "react";

import Posts from "./posts/Posts";
import Compose from "./compose/Compose";
import usePosts from "./timeline/usePosts";

function TimelinePage() {
  const [posts, addPost] = usePosts();

  return (
    <>
      <Compose addPost={addPost} />
      <Posts posts={posts} />
    </>
  );
}

export default TimelinePage;
