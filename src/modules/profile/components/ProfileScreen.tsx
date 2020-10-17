import * as React from "react";
import { Loader } from "../../common/components";
import { User } from "../../types";
import Profile from "./Profile";

type Props = {
  currentUser: User;
  isLoading: boolean;
};

function ProfileScreenContainer({ isLoading, currentUser = {} }: Props) {
  if (isLoading) {
    return <Loader />;
  }

  return <Profile currentUser={currentUser} />;
}

export default ProfileScreenContainer;
