import React from "react";

import Posts from "../posts/Posts";
import Compose from "../compose/Compose";
import usePosts from "../posts/usePosts";
import { getPostsWithEtag } from "../../api/getPosts";

function Profile({ username }) {
  const [posts, addPost] = usePosts(getUserPostsFromApi);

  async function getUserPostsFromApi(etag) {
    return await getPostsWithEtag(username, etag);
  }

  return (
    <>
      <Compose addPost={addPost} />
      <Posts posts={posts} />
    </>
  );
}

export default Profile;
