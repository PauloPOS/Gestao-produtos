import { configureStore } from '@reduxjs/toolkit'
import produtoReducer from './slices/produto';

export const store = configureStore({
  reducer: {
    produto: produtoReducer,
},
});