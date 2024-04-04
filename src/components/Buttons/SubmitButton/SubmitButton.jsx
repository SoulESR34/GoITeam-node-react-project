import React from "react";
import { Button } from "./submitButton.styled.js";

export const SubmitButton = ({ type, text, login = true }) => {
  return <Button type={type} $primary={login}>{text}</Button>;
};
