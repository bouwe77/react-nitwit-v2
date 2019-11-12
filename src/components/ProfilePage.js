import React from "react";

import Profile from "./profile/Profile";
import { useParams } from "react-router";

function ProfilePage() {
  const { username } = useParams();

  return <Profile profileUsername={username} />;
}

export default ProfilePage;
