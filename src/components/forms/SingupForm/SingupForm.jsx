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

export const SingupForm = () => {
  return (
    <Form action="">
      <Title>INICIAR SESIÓN</Title>
      <WrapperInputs>
        <Label htmlFor="name">
          <InputText>Nombre*</InputText>
          <Input name="name" type="text" required></Input>
        </Label>

        <Label htmlFor="email">
          <InputText>Correo electronico *</InputText>
          <Input name="email" type="email" required></Input>
        </Label>

        <Label htmlFor="password">
          <InputText>Contraseña *</InputText>
          <Input name="password" type="password" required></Input>
        </Label>
      </WrapperInputs>
        <SubmitWrapper>
          <SubmitButton text="Crear cuenta" />
          <SubmitButton text="Iniciar sesión" login={false} />
        </SubmitWrapper>
    </Form>
  );
};
