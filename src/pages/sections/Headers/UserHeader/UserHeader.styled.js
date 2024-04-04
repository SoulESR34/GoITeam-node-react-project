import styled from "styled-components";

export const NavbarPage = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 60px;
`;
export const NavbarUser = styled.nav`
  display: flex;
  gap: 40px;

  @media (width < 480px){
    display: none;
  }
`;

export const UserInfo = styled.p`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.02em;
  line-height: 1.5;
  color: ${props => props.$primary ? "#000" : "#9b9faa"};
  text-decoration: none;
`;

export const NavbarUserMobile = styled.div`
  padding: 10px 20px;
  background: #EFF1F3;
  display: none;
  justify-content: end;
  gap: 40px;

  @media( width < 480px){
    display: flex;
  }
`

export const MobileContainerUserInfo = styled.div`
  display: flex;
  gap: 40px;
` 