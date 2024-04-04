import React from "react";
import { IconContainer } from "./BurgerMenuIcon.styled";

export const BurgerMenuIcon = ({ eventClick, isOpen }) => {
  return (
    <IconContainer onClick={() => eventClick()}>
      {!isOpen ? (
        <img src="/src/assets/menu-icon.svg" alt="menú" />
      ) : (
        <img src="/src/assets/close-icon.svg" alt="cerrar" />
      )}
    </IconContainer>
  );
};
