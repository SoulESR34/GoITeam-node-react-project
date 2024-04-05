import styled from "styled-components";

export const Button = styled.button`
  width: 210px;
  height: 45px;

  border-radius: 50px;

  background-color: #fc842d;
  color: white;
  font-weight: bold;
  text-align: center;

  margin-left: auto;
  margin-right: 0;

  @media (width < 768px){
    margin-left: 0;
  }
`;
