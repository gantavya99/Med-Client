// reducers/cart.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    incrementQuantity(state, action) {
      const { productId } = action.payload;
      console.log(action.payload);
      const product = state.find((item) => item.id === productId);
      if (product) {
        product.quantity++;
      }
    },
    decrementQuantity(state, action) {
      const { productId } = action.payload;
      const product = state.find((item) => item.id === productId);
      if (product && product.quantity > 1) {
        product.quantity--;
      }
    },
  },
});

export const {
  add,
  remove,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
