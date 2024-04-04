import React from "react";
import { SingupForm } from "../../../components/forms/SingupForm/SingupForm";
import { HomeBackground } from '../../common/HomeBackground.styled'

export const Singup = () => {
  return (
    <HomeBackground>
      <div className="container">
        <SingupForm>Singup</SingupForm>
      </div>
    </HomeBackground>
  );
};
