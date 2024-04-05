import React from "react";
import { HomeHeader } from "../HomeHeader/HomeHeader";
import { UserHeader } from "../UserHeader/UserHeader";

export const Header = (isLogged) => {
  return <>{isLogged ? <UserHeader /> : <HomeHeader />}</>;
};
