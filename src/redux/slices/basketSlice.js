import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  totalCount: 0,
  basketPizzas: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    window(state) {
      state.totalCount = state.basketPizzas.reduce((acc, item) => acc + item.count, 0);
      state.totalPrice = state.basketPizzas.reduce((acc, item) => acc + item.price * item.count, 0);
    },
    addToBasket(state, action) {
      const findItem = state.basketPizzas.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        // state.basketPizzas.push({ ...action.payload, count })
        findItem.count++;
      } else {
        state.basketPizzas.push({ ...action.payload, count: 1 });
      }
    },
    removeItem(state, action) {
      const findItem = state.basketPizzas.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count--;
      }
      if (findItem.count === 0) {
        state.basketPizzas = state.basketPizzas.filter((obj) => obj.id !== findItem.id);
      }
    },
    clearItem(state, action) {
      state.basketPizzas = state.basketPizzas.filter((obj) => obj.id !== action.payload.id);
    },
    clearBasket(state) {
      state.basketPizzas = [];
    },
  },
});

export const { window, addToBasket, removeItem, clearItem, clearBasket } = basketSlice.actions;

export default basketSlice.reducer;
