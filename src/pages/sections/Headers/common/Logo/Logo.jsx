import React from "react";
import { LogoContainer } from "./Logo.styled.js";
import { NavLink } from "react-router-dom";

export const Logo = ({responsive = true}) => {
  return (
    <LogoContainer>
      <NavLink to="/">
        { responsive ?
          <picture>
            <source
              media="(max-width: 480px)"
              srcSet="src/assets/logo-mobile.svg"
            />
            <img src="src/assets/logo.svg" alt="Logo" />
          </picture>
          :
          <img src="src/assets/logo.svg" alt="Logo" />
        }
      </NavLink>
    </LogoContainer>
  );
};
