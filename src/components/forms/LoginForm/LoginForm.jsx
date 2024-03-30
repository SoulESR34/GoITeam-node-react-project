import React from "react";
import { WrapperInputs, Form, Title, Label, InputText, Input } from "../Common/Form.styled.js";
import { SubmitButton } from "../../Buttons/SubmitButton/SubmitButton.jsx";

export const LoginForm = () => {
  return (
    <Form action="">
        <Title>INICIAR SESIÓN</Title>
      <WrapperInputs>
        <Label htmlFor="email">
          <InputText>Correo electronico *</InputText>
          <Input name="email" type="email" required></Input>
        </Label>

        <Label htmlFor="email">
          <InputText>Contraseña  *</InputText>
          <Input name="email" type="email" required></Input>
        </Label>
      </WrapperInputs>
      <SubmitButton />
    </Form>
  );
};
