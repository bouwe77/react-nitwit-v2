import React from "react";

import Posts from "./posts/Posts";
import Compose from "./compose/Compose";
import usePosts from "./profile/usePosts";
import { useParams } from "react-router";

function TimelinePage() {
  const { username } = useParams();

  const [posts, addPost] = usePosts(username);

  return (
    <>
      <b> {username}'s profile</b>
      <br />
      <br />
      <Compose addPost={addPost} />
      <Posts posts={posts} />
    </>
  );
}

export default TimelinePage;
