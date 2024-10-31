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
    setAlunos: (state, action) => {
      state.alunos = action.payload;
    },
    setDetalhes: (state, action) => {
      state.detalhe = action.payload;
    },
  },
});

export const { setProdutos, setDetalhes, setLoading } = produtoSlice.actions;
export default produtoSlice.reducer;