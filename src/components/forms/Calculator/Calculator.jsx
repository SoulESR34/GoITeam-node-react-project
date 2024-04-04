import React, { useState, useEffect } from "react";
import { Wrapper, CheckListInput ,Title, WrapperInputs} from "./Calculator.styled.js";
import {
  Form,
  Label,
  InputText,
  Input,
} from "../Common/Form.styled.js";
import { LosingWeightButton } from "../../Buttons/LosingWeightButton/LosingWeightButton.jsx";
import Modal from "../../Modal/Modal.jsx";

import foodsNotAllowed from "./findFoodsNotAllowed.json";

export const Calculator = () => {
  const [formData, setFormData] = useState({
    height: "",
    age: "",
    actualWeight: "",
    desiredWeight: "",
    bloodType: "",
    calories: null,
    foodsNotAllowed: [],
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Cargar los alimentos no permitidos del JSON
    setFormData((prevFormData) => ({
      ...prevFormData,
      foodsNotAllowed: foodsNotAllowed.map((food) => food.name),
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realiza el cálculo de las calorías diarias
    const calories =
      10 * formData.actualWeight +
      6.25 * formData.height -
      5 * formData.age -
      161 -
      10 * (formData.actualWeight - formData.desiredWeight);

    setFormData({ ...formData, calories });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const findFoodsNotAllowed = () => {
    const { bloodType } = formData;
    // Filtrar los alimentos no permitidos para el grupo sanguíneo seleccionado
    const foods = foodsNotAllowed.filter((food) => {
      // Verificar si `food.groupBloodNotAllowed` está definido y tiene una entrada en el índice `bloodType`
      return food.groupBloodNotAllowed && food.groupBloodNotAllowed[bloodType];
    });
    // Obtener solo los títulos de los primeros 10 alimentos no permitidos
    const firstTenFoods = foods.slice(0, 10).map((food) => food.title);
    return firstTenFoods;
  };

  return (
    <Wrapper>
      <Form onSubmit={(e) => handleCalc(e)}>
        <Title>Calcula tu ingesta diaria de calorías ahora mismo</Title>
        <WrapperInputs>
          <Label htmlFor="height">
            <InputText>Altura (cm)*</InputText>
            <Input
              name="height"
              type="number"
              min={100}
              max={250}
              required
              value={formData.height}
              onChange={handleChange}
            />
          </Label>

          <Label htmlFor="age">
            <InputText>Edad *</InputText>
            <Input
              name="age"
              type="number"
              min={1}
              max={120}
              required
              value={formData.age}
              onChange={handleChange}
            />
          </Label>

          <Label htmlFor="actualWeight">
            <InputText>Peso actual (kg)*</InputText>
            <Input
              name="actualWeight"
              type="number"
              min={20}
              max={400}
              required
              value={formData.actualWeight}
              onChange={handleChange}
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
              value={formData.desiredWeight}
              onChange={handleChange}
            />
          </Label>

          <div>
            <InputText>Grupo sanguíneo *</InputText>
            <CheckListInput>
              {[1, 2, 3, 4].map((option) => (
                <Label key={option} htmlFor={`bloodType-${option}`}>
                  <InputText>{option}</InputText>
                  <input
                    name="bloodType"
                    id={`bloodType-${option}`}
                    type="radio"
                    value={option}
                    required
                    onChange={handleChange}
                  />
                </Label>
              ))}
            </CheckListInput>
          </div>
        </WrapperInputs>
        <LosingWeightButton type="submit">
          Calcular Calorías Diarias
        </LosingWeightButton>
      </Form>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <p>
          Calorías diarias a consumir:{" "}
          {formData.calories && formData.calories.toFixed(2)}
        </p>
        <p>Alimentos no permitidos: {findFoodsNotAllowed().join(", ")}</p>
      </Modal>
    </Wrapper>
  );
};
