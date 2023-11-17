import { createSlice } from "@reduxjs/toolkit";
import all_product from "../../assets/all_product";

const initialState = {
  products: all_product,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export const getProducts = (store) => store.products.products;

export default productSlice.reducer;
