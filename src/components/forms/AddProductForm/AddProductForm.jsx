<<<<<<< HEAD
=======
import React, { useState } from "react";
oductActions.js;
>>>>>>> b3ebc388f34b25b63c5824bd8d58af7adeaffc10
import { useDispatch } from "react-redux";
import { addProduct } from "../actions/productActions";
import "./AddProductForm.css";

export const AddProductForm = () => {
  const [productName, setProductName] = useState("");
  const [grams, setGrams] = useState("");
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(addProduct({ name: productName, grams: grams }));

    setProductName("");
    setGrams("");
  };

  return (
    <div className="add-product-form">
      <input
        type="text"
        placeholder="Ingrese nombre del producto"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Gramos"
        value={grams}
        onChange={(e) => setGrams(e.target.value)}
      />
      <button className="add-button" onClick={handleAddProduct}>
        +
      </button>
    </div>
  );
};
