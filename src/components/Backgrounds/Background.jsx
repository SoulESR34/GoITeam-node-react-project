import React from "react";
import { HomeBackground } from "./HomeBackground.styled";
import { UserBackground } from "./UserBackground.styled";

export const Background = ({ isLogged, children }) => {
  return (
    <>
      {isLogged ? (
        <UserBackground>{children}</UserBackground>
      ) : (
        <HomeBackground>{children}</HomeBackground>
      )}
    </>
  );
};
