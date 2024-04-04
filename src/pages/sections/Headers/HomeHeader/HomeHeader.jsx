import {
  HeaderWrapper,
  NavLinkWrapper,
  NavList,
} from "../common/styles/Header.styled";
import { Logo} from "../common/Logo/Logo.jsx"
import { Outlet } from "react-router-dom";

export const HomeHeader = () => {
  return (
    <>
      <HeaderWrapper className="container">
        <LogoContainer />
        <NavLinkWrapper>
          <NavList to="/login">INICIAR SESIÓN</NavList>
          <NavList to="/singup">CREAR UNA CUENTA</NavList>
        </NavLinkWrapper>
      </HeaderWrapper>
      <Outlet />
    </>
  );
};
