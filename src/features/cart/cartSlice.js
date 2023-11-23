import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(
        (item) => item.productId !== action.payload
      );
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.productId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.newPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.productId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.newPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
    selectItemSize: {
      prepare(id, optedSize) {
        return { payload: { id, optedSize } };
      },
      reducer(state, action) {
        const item = state.cart.find(
          (item) => item.productId === action.payload.id
        );
        item.size = action.payload.optedSize;
      },
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  clearCart,
  selectItemSize,
  decreaseItemQuantity,
} = cartSlice.actions;

export const getCart = (store) => store.cart.cart;

export const getProductSizeById = (id) => (store) =>
  store.cart.cart.find((item) => item.productId === id)?.size;

export const getProductQuantityById = (id) => (store) =>
  store.cart.cart.find((item) => item.productId === id).quantity ?? 0;

export const getProduct = (id) => (store) =>
  store.cart.cart.find((item) => item.productId === id);

export default cartSlice.reducer;
