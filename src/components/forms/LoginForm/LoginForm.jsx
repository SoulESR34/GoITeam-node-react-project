import React from "react";
import {
  WrapperInputs,
  Form,
  Title,
  Label,
  InputText,
  Input,
  SubmitWrapper
} from "../Common/Form.styled.js";
import { SubmitButton } from "../../Buttons/SubmitButton/SubmitButton.jsx";



const handleSendToRegistration = (e) =>{
  navigate('/singup')
}

export const LoginForm = () => {
  return (
    <Form action="POST">
      <Title>INICIAR SESIÓN</Title>
      <WrapperInputs>
        <Label htmlFor="email">
          <InputText>Correo electronico *</InputText>
          <Input name="email" type="email" required></Input>
        </Label>

        <Label htmlFor="password">
          <InputText>Contraseña *</InputText>
          <Input name="password" type="password" required></Input>
        </Label>
        <SubmitWrapper>
          <SubmitButton type="submit" text="Crear cuenta" />
          <SubmitButton onClick={() => handleSendToRegistration()} type="button" text="Iniciar sesión" login={false} />
        </SubmitWrapper>
      </WrapperInputs>
    </Form>
  );
};
