import React, { useState } from "react";
import PropTypes from "prop-types"; // 
import { connect } from "react-redux";
import { addProduct } from "redux";
import styles from "./AddProductForm.module.css";

export const AddProductForm = ({ addProduct }) => {
  const [productName, setProductName] = useState("");
  const [grams, setGrams] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productName.trim() === "" || grams.trim() === "") {
      alert("Por favor, complete todos los campos.");
      return;
    }
    addProduct({ productName, grams });
    setProductName("");
    setGrams("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Ingrese nombre del producto"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        className={styles.input}
      />
      <input
        type="text"
        placeholder="Gramos"
        value={grams}
        onChange={(e) => setGrams(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        +
      </button>
    </form>
  );
};


AddProductForm.propTypes = {
  addProduct: PropTypes.func.isRequired, 
};

connect(null, { addProduct })(AddProductForm);
