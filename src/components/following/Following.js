import React from "react";

import UserList from "./UserList";
import { getFollowing } from "../../api/getFollowing";
import { saveUnfollow } from "../../api/saveUnfollow";
import { saveFollow } from "../../api/saveFollow";

export default class Following extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount = () => {
    this.getUsers();
  };

  getUsers = async () => {
    try {
      const users = await getFollowing(this.props.username);
      this.setState({ users });
    } catch (error) {
      console.log(error, error.request, error.response, error.config);
    }
  };

  // Toggles the following status for the given user.
  toggleFollowing = async userToFollowOrUnfollow => {
    // Remember the users before the toggle is applied
    const previousUsers = this.state.users;

    // Determine whether the given user is being followed or unfollowed.
    const follow = !this.state.users.find(u => u.user === userToFollowOrUnfollow)
      .youAreFollowing;

    // Update the local state first (i.e. optimistic UI updates).
    const users = this.state.users.map(user => {
      if (user.user === userToFollowOrUnfollow) {
        return {
          ...user,
          youAreFollowing: !user.youAreFollowing
        };
      }
      return user;
    });

    this.setState({ users });

    // Save the new following status to the API.
    try {
      if (follow) {
        // Save to the API the user must be followed.
        await saveFollow(this.props.username, { user: userToFollowOrUnfollow });
      } else {
        // Save to the API that the user must be unfollowed.
        await saveUnfollow(this.props.username, userToFollowOrUnfollow);
      }
    } catch (error) {
      console.log(error, error.request, error.response, error.config);
      // The API call failed so restore the original state.
      this.setState({ users: previousUsers });
    }
  };

  render() {
    return (
      <>
        <UserList users={this.state.users} toggleFollowing={this.toggleFollowing} />
      </>
    );
  }
}
