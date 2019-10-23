import { useState } from "react";
import useInterval from "@use-it/interval";
import { getPostsWithEtag } from "../../api/getPosts";
import { savePost } from "../../api/getTimeline";

export default username => {
  const defaultDelay = 10000;
  const [delay, setDelay] = useState(0);
  const [posts, setPosts] = useState([]);
  const [etag, setEtag] = useState(null);

  // Retrieve the posts every x seconds
  useInterval(async () => {
    // The initial delay is zero so the first API call is done right away.
    // After that, all subsequent calls must be done according to the defaultDelay.
    if (delay !== defaultDelay) setDelay(defaultDelay);

    // Call the API to get the posts.
    const result = await getPostsWithEtag(username, etag);
    if (result.isNew) {
      setPosts(result.data);
      setEtag(result.etag);
    }
  }, delay);

  const addPost = content => {
    // Remember the posts before the new post is added.
    const prevTimeline = posts;

    // Add new post to state BEFORE posting it to the API (i.e. "optimistic UI updates")
    setPosts([{ user: username, content }, ...posts]);

    // Post the new post to the API.
    savePost(username, { content }).catch(() => {
      // Posting to the API failed so "rollback" the state to the previous posts.
      setPosts(prevTimeline);
    });
  };

  return [posts, addPost];
};