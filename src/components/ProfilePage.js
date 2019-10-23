import React from "react";

import Posts from "./posts/Posts";
import Compose from "./compose/Compose";
import usePosts from "./posts/usePosts";
import { useParams } from "react-router";
import { getPostsWithEtag } from "../api/getPosts";

function ProfilePage() {
  const { username } = useParams();
  const [posts, addPost] = usePosts(getUserPostsFromApi);

  async function getUserPostsFromApi(etag) {
    return await getPostsWithEtag(username, etag);
  }

  return (
    <>
      <b>{username}'s profile</b>
      <br />
      <br />
      <Compose addPost={addPost} />
      <Posts posts={posts} />
    </>
  );
}

export default ProfilePage;
