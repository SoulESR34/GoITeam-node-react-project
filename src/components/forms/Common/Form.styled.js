import styled from "styled-components";

export const Title = styled.h2`
  color: #fc842d;
  font-size: 20px;
`;

export const WrapperInputs = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 210px;
  gap: 40px;

  @media (width < 700px){
    height: 470px;
  }
`

export const Form = styled.form`
  display: grid;
  gap: 50px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
export const InputText = styled.span`
  color: #9b9faa;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 240px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  background-color: transparent;
  &:focus {
    outline: none;
    border-bottom: 1px solid #fc842d;
  }
`;
