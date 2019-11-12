import React, { useState, useEffect } from "react";

import Profile from "./profile/Profile";
import { useParams } from "react-router";
import { getUser } from "../api/getUser";

function ProfilePage() {
  const [userFound, setUserFound] = useState();

  const { username } = useParams();

  useEffect(() => {
    async function doesUserExist(username) {
      try {
        const user = await getUser(username);
        return user ? true : false;
      } catch {
        console.log("hiero error");

        return false;
      }
    }

    const result = doesUserExist(username);
    console.log("result:", result);

    //    setUserFound(result);
  }, [username]);

  return <>{userFound ? <Profile profileUsername={username} /> : "User does not exist"}</>;
}

export default ProfilePage;
