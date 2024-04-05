import styled from "styled-components";
import fruitsDeskImg from "../../assets/img/desk/fruits-desktop.png";
import fruitsTabletImg from "../../assets/img/tablet/fruits-tablet.png";

export const HomeBackground = styled.div`
  background-image: url(${fruitsDeskImg});
  background-size: contain;
  background-position: right bottom;
  background-repeat: no-repeat;
  height: 100vh;


  @media(width < 1024px){
    background-image: url(${fruitsTabletImg});
    background-size: cover;
  }

  @media(width < 768px){
    background-image: none;
  }
`;
