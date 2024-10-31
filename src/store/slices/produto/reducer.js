import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  produtos: [],
  detalhe: [],
  loading: false,  
}

const produtoSlice = createSlice({
  name: 'produto',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setProdutos: (state, action) => {
      state.produtos = action.payload;
    },
    setDetalhes: (state, action) => {
      state.detalhe = action.payload;
    },
  },
});

export const { setProdutos, setDetalhes, setLoading } = produtoSlice.actions;
export default produtoSlice.reducer;