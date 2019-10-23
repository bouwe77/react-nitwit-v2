import React from "react";

import Posts from "./posts/Posts";
import Compose from "./compose/Compose";
import usePosts from "./posts/usePosts";
import { getTimelineWithEtag } from "../api/getTimeline";
import settings from "../settings";

function TimelinePage() {
  const [posts, addPost] = usePosts(getTimelineFromApi);

  async function getTimelineFromApi(etag) {
    return await getTimelineWithEtag(settings.username, etag);
  }

  return (
    <>
      <Compose addPost={addPost} />
      <Posts posts={posts} />
    </>
  );
}

export default TimelinePage;
