import { configureStore } from '@reduxjs/toolkit'
import produtoReducer from './slices/produto/reducer';

export const store = configureStore({
  reducer: {
    produto: produtoReducer
},
});