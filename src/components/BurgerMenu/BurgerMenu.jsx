import React from "react";
import { ModalContainer, NavbarContainer, LinkMenu } from "./BurgerMenu.styled";

export const BurgerMenu = ({ eventClick }) => {
  return (
    <ModalContainer>
      <NavbarContainer>
        <LinkMenu onClick={() => eventClick()} to="/dairy">DIARIO</LinkMenu>
        <LinkMenu onClick={() => eventClick()} to="/calculator">CALCULADORA</LinkMenu>
      </NavbarContainer>
    </ModalContainer>
  );
};
