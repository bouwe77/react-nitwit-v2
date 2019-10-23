import React from "react";
import { useParams } from "react-router";

function ProfilePage() {
  let { username } = useParams();

  return <>Hello from {username} :)</>;
}

export default ProfilePage;
