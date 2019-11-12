import React from "react";

import Posts from "../posts/Posts";
import Compose from "../compose/Compose";
import usePosts from "../posts/usePosts";
import { getPostsWithEtag } from "../../api/getPosts";
import { useAuth } from "../../auth/AuthProvider";

function Profile({ username }) {
  const [posts, addPost] = usePosts(getUserPostsFromApi);
  const { isLoggedIn } = useAuth();

  async function getUserPostsFromApi(etag) {
    return await getPostsWithEtag(username, etag);
  }

  return (
    <>
      {isLoggedIn && <Compose addPost={addPost} />}
      {posts.length === 0 ? `${username} has no posts yet... :(` : <Posts posts={posts} />}
    </>
  );
}

export default Profile;
