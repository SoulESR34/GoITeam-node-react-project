import React from "react";
import { Outlet } from "react-router-dom";
import {
  HeaderWrapper,
  NavLinkWrapper,
  NavList,
} from "../common/styles/Header.styled.js";
import { Logo } from "../common/Logo/Logo.jsx";
import {
  NavbarPage,
  NavbarUser,
  NavbarUserMobile,
  UserInfo,
} from "./UserHeader.styled.js";
import { BurgerMenuIcon } from "../../../../components/BurgerMenu/icon/BurgerMenuIcon.jsx";


export const UserHeader = ({ username }) => {
  return (
    <>
      <header>
        <HeaderWrapper $between className="container">
          <NavbarPage>
            <Logo responsive={false} />

            <NavLinkWrapper $user>
              <NavList to="/dairy">DIARIO</NavList>
              <NavList to="/calculator">CALCULADORA</NavList>
            </NavLinkWrapper>
          </NavbarPage>

          <NavbarUser>
            <UserInfo $primary>{username ? username : "Usuario"}</UserInfo>
            <UserInfo>Salir</UserInfo>
          </NavbarUser>

          <BurgerMenuIcon />
        </HeaderWrapper>

        <div>
          <NavbarUserMobile>
            <UserInfo $primary>{username ? username : "Usuario"}</UserInfo>
            <UserInfo>Salir</UserInfo>
          </NavbarUserMobile>
        </div>
      </header>
      <Outlet />
    </>
  );
};
