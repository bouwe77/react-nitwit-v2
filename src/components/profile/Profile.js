import React from "react";

import Posts from "../posts/Posts";
import Compose from "../compose/Compose";
import usePosts from "../posts/usePosts";
import { getPostsWithEtag } from "../../api/getPosts";
import { useAuth } from "../../auth/AuthProvider";

function Profile({ profileUsername }) {
  const [posts, addPost] = usePosts(getUserPostsFromApi);
  const { isLoggedIn, user } = useAuth();

  async function getUserPostsFromApi(etag) {
    return await getPostsWithEtag(profileUsername, etag);
  }

  const addPost2 = content => {
    addPost(content, user.username);
  };

  return (
    <>
      {isLoggedIn && user.username === profileUsername && <Compose addPost={addPost2} />}

      <Posts posts={posts} />
    </>
  );
}

export default Profile;
