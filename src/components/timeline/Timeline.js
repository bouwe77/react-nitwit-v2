import React from "react";

import Posts from "../posts/Posts";
import Compose from "../compose/Compose";
import usePosts from "../posts/usePosts";
import { getTimelineWithEtag } from "../../api/getTimeline";
import { useAuth } from "../../auth/AuthProvider";

function Timeline() {
  const [posts, addPost] = usePosts(getTimelineFromApi);
  const { user } = useAuth();
  console.log("timeline user", user);

  async function getTimelineFromApi(etag) {
    return await getTimelineWithEtag(user.username, etag);
  }

  const addPost2 = content => {
    addPost(content, user.username);
  };

  return (
    <>
      <Compose addPost={addPost2} />
      <Posts posts={posts} />
    </>
  );
}

export default Timeline;
