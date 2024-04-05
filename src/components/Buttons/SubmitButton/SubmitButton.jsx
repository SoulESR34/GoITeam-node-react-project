import React from "react";
import { Button } from "./submitButton.styled.js";

export const SubmitButton = ({ type, text }) => {
  return <Button type={type}>{text}</Button>;
};
