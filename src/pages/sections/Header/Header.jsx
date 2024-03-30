import { HeaderWrapper, Logo, NavLinkWrapper, NavList } from "./Header.styled";
import { Outlet, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <HeaderWrapper className="container">
        <Logo>
          <NavLink to="/">
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet="src/assets/logo-mobile.svg"
              />
              <img src="src/assets/logo.svg" alt="Logo" />
            </picture>
          </NavLink>
        </Logo>

        <NavLinkWrapper>
          <NavList to="/login">LOG IN</NavList>
          <NavList to="/singup">REGISTRATION</NavList>
        </NavLinkWrapper>
      </HeaderWrapper>
      <Outlet/>
    </>
  );
};
