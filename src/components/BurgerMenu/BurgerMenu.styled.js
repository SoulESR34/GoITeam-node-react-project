import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ModalContainer = styled.div`
    height: 100vh;
    background-color: #264061;
    color: white;
`
export const NavbarContainer = styled.nav`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 100px;
    gap: 20px; 
`

export const LinkMenu = styled(NavLink)`
    color: #9B9FAA;
    font-weight: bold;
    font-size: 20px;
    text-decoration: none;

    &:hover, &:focus{
        color: white;
    }
`