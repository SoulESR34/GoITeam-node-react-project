import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.$between ? "space-between" : "flex-start"};
  padding: 20px;
  gap: 60px;

  @media (width < 1024px) {
    justify-content: space-between;
    margin-top: 5px;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 1px;
  }
`;

export const NavLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    padding-right: 20px;
  }

  @media (width < 768px) {
    display: ${(props) => (props.$user ? "none" : "flex")};
  }
`;

export const NavList = styled(NavLink)`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.02em;
  line-height: 1.5;
  color: #9b9faa;
  text-decoration: none;

  &:hover,
  &:focus {
    color: black;
  }

  &.active {
    color: black;
  }
`;
