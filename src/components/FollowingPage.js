import React from "react";
import Following from "./following/Following";
import { useAuth } from "../auth/AuthProvider";

function FollowingPage() {
  const { user } = useAuth();

  return <Following username={user.username} />;
}

export default FollowingPage;
