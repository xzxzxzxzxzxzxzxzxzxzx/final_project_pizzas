import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '../slices/filterSlice';
import basketReducer from '../slices/basketSlice';

export const store = configureStore(
  {
    reducer: {
      filter: filterReducer,
      basket: basketReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// console.log(store.reducer);
