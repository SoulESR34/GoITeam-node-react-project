import React, { useState } from "react";
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
import Modal from "../../Modal/Modal.jsx";
import styles from "./Modal.module.css";
import productos from "./Modal.json/productos.json";

const Calculator = () => {
  const [formData, setFormData] = useState({
    height: "",
    age: "",
    actualWeight: "",
    desiredWeight: "",
    bloodType: "",
    calories: null,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Realizar el cálculo de las calorías diarias
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
    const foods = productos.filter((food) => {
      // Verificar si food.groupBloodNotAllowed está definido y tiene una entrada en el índice bloodType
      return food.groupBloodNotAllowed && food.groupBloodNotAllowed[bloodType];
    });
    // Obtener solo los títulos de los primeros 4 alimentos no permitidos
    const firstFourFoods = foods.slice(0, 4).map((food) => food.title);
    return firstFourFoods;
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
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
      <Modal
        isOpen={isModalOpen && formData.calories !== null}
        onClose={handleCloseModal}
      >
        {formData.calories !== null && (
          <>
            <h1 className={styles.text}>
              Tu ingesta diaria recomendada de calorías es:{" "}
            </h1>
            <p className={styles["calories-value"]}>
              {formData.calories.toFixed(2)}{" "}
              <span className={styles.kcal}>kcal</span>
            </p>

            <h3>Alimentos que no deberías comer:</h3>
            <ol>
              {findFoodsNotAllowed().map((food, index) => (
                <li key={index}>{food}</li>
              ))}
            </ol>
          </>
        )}
      </Modal>
    </Wrapper>
  );
};

export default Calculator;
