import styled from "styled-components";
import userBackgroundDesk from "../../assets/img/desk/user-background-desk.jpg"
import userBackgroundTablet from "../../assets/img/tablet/user-background-tablet.jpg"
import userBackgroundMobile from "../../assets/img/mobile/user-background-mobile.jpg"

export const UserBackground = styled.div`
  background-image: url(${userBackgroundDesk});
  background-size: contain;
  background-position: right bottom;
  background-repeat: no-repeat;
  height: 100vh;


  @media(width < 1280px){
    background-image: url(${userBackgroundTablet});
    background-size: 100% 440px;
  }

  @media(width < 768px){
    background-image: url(${userBackgroundMobile});
  }
`;
