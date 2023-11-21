import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  /*
  cart: [
    productId,
    name,
    size,
    category,
    quantity,
    price,
    image,
    totalPrice
  ]

  */
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteProduct(state, action) {
      // payload = productId
      state.cart = state.cart.filter(
        (item) => item.productId !== action.payload
      );
    },
    selectProductSize: {
      //  payload = { productId, sizeOption }
      prepare(productId, sizeOption) {
        return {
          payload: { productId, sizeOption },
        };
      },
      reducer(state, action) {
        const product = state.cart.find(
          (item) => item.productId === action.payload.productId
        );
        product.size = action.payload.value;
      },
    },
    increaseProductQuantity(state, action) {
      // payload = productId
      const product = state.cart.find(
        (item) => item.productId === action.payload
      );
      product.quantity++;
      product.totalPrice = product.quantity * product.price;
    },
    decreaseProductQuantity(state, action) {
      // payload = productId
      const product = state.cart.find(
        (item) => item.productId === action.payload
      );
      product.quantity--;
      product.totalPrice = product.quantity * product.price;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  selectProductSize,
  increaseProductQuantity,
  decreaseProductQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
