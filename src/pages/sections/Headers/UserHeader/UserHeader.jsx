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
  MobileContainerUserInfo,
} from "./UserHeader.styled.js";
import { BurgerMenuIcon } from "../../../../components/BurgerMenu/icon/BurgerMenuIcon.jsx";
import { BurgerMenu } from "../../../../components/BurgerMenu/BurgerMenu.jsx";
import { useState } from "react";

export const UserHeader = ({ username }) => {
  const [isOpen, setIsOpend] = useState(false);

  const handleMenuOpening = () => {
    setIsOpend((isOpen) => !isOpen);
  };

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

          <MobileContainerUserInfo>
            <NavbarUser>
              <UserInfo $primary>{username ? username : "Usuario"}</UserInfo>
              <UserInfo>Salir</UserInfo>
            </NavbarUser>

            <BurgerMenuIcon eventClick={handleMenuOpening} isOpen={isOpen} />
          </MobileContainerUserInfo>
        </HeaderWrapper>

        <div>
          <NavbarUserMobile>
            <UserInfo $primary>{username ? username : "Usuario"}</UserInfo>
            <UserInfo>Salir</UserInfo>
          </NavbarUserMobile>
        </div>
      </header>
      {isOpen? <BurgerMenu eventClick={handleMenuOpening}/> : <Outlet/>}
      
    </>
  );
};
