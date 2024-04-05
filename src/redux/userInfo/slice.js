import { createAsyncThunk } from "@reduxjs/toolkit";

export const addProduct = (productData) => {
    return {
      type: "ADD_PRODUCT", 
      payload: productData, 
    };
  };