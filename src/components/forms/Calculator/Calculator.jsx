import React from "react";
import { Wrapper, CheckListInput } from "./Calculator.styled.js";
import {
  Form,
  Title,
  Label,
  InputText,
  Input,
  WrapperInputs,
} from "../Common/Form.styled.js";

import { LosingWeightButton } from "../../Buttons/LosingWeightButton/LosingWeightButton.jsx";

export const Calculator = () => {
  return (
    <Wrapper>
      <Form>
        <Title>Calcula tu ingesta diaria de calorías ahora mismo</Title>
        <WrapperInputs>
          <Label htmlFor="height">
            <InputText>Altura (cm)*</InputText>
            <Input name="height" type="number" min={100} max={250} required />
          </Label>

          <Label htmlFor="age">
            <InputText>Edad *</InputText>
            <Input name="age" type="number" min={1} max={120} required />
          </Label>

          <Label htmlFor="actualWeight">
            <InputText>Peso actual (kg)*</InputText>
            <Input
              name="actualWeight"
              type="number"
              min={20}
              max={400}
              required
            />
          </Label>

          <Label htmlFor="desiredWeight">
            <InputText>Peso deseado (kg)*</InputText>
            <Input
              name="desiredWeight"
              type="number"
              min={20}
              max={400}
              required
            />
          </Label>
          <div>
            <InputText>grupo sanguineo *</InputText>
            <CheckListInput>
              <Label htmlFor="desiredWeight">
                <InputText>1</InputText>
                <input name="desiredWeight" type="radio" value="1" required />
              </Label>

              <Label htmlFor="desiredWeight">
                <InputText>2</InputText>
                <input name="desiredWeight" type="radio" value="2" required />
              </Label>

              <Label htmlFor="desiredWeight">
                <InputText>3</InputText>
                <input name="desiredWeight" type="radio" value="3" required />
              </Label>

              <Label htmlFor="desiredWeight">
                <InputText>4</InputText>
                <input name="desiredWeight" type="radio" value="4" required />
              </Label>
            </CheckListInput>
          </div>
        </WrapperInputs>
        <LosingWeightButton type="submit" />
      </Form>
    </Wrapper>
  );
};
