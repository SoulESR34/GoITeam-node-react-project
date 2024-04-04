import styled from "styled-components";

export const Wrapper = styled.div`
  width: 700px;
  @media (width < 768px){
    width: 100%;
  }
`;

export const Title = styled.h1`
  @media (width < 480px){
    font-size: 22px;
    color: black;
  }
`
export const WrapperInputs = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 210px;
  gap: 40px;

  @media (width < 700px) {
    display: inline;
    height: auto;
    flex-direction: column;
    gap: 50px;
  }
`;

export const CheckListInput = styled.div`
  width: 240px;
  display: flex;
  justify-content: space-between;
  color: #fc842d;
`;


export const CheckInput = styled.input``;
