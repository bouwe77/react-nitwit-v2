import React, { useState, useEffect } from "react";

import Profile from "./profile/Profile";
import { useParams } from "react-router";
import { getUser } from "../api/getUser";

function ProfilePage() {
  const [userFound, setUserFound] = useState();

  const { username } = useParams();

  useEffect(() => {
    async function doesUserExist() {
      try {
        const user = await getUser(username).then(user => user);
        setUserFound(user != null);
      } catch {
        setUserFound(userFound);
      }
    }

    doesUserExist();
  }, [username, userFound]);

  return <>{userFound ? <Profile profileUsername={username} /> : "User does not exist"}</>;
}

export default ProfilePage;
