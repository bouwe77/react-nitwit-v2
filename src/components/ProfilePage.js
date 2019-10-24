import React from "react";

import Profile from "./profile/Profile";
import { useParams } from "react-router";

function ProfilePage() {
  const { username } = useParams();

  return <Profile username={username} />;
}

export default ProfilePage;
