import styled from "styled-components";

export const Button = styled.button`
  width: 180px;
  height: 45px;
  border-radius: 50px;

  font-weight: bold;
  background: ${(props) => (props.$primary ? "#FC842D" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#FC842D")};
  border: ${(props) => (!props.$primary ? "2px solid #FC842D" : "none")};
  cursor: pointer;

  &:hover {
    box-shadow: 3px 3px 10px #b85b17;
  }
`;
