import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  produtos: [],
  detalhe: [],
}

export const counterSlice = createSlice({
  name: 'produto',
  initialState,
  reducers: {
    setProdutos: (state, action) => {
        state.produtos = action.payload
    },
    setDetalhes: (state, action) => {
        state.detalhe = action.payload
    },
    
    
    //incrementByAmount: (state, action: PayloadAction<number>) => {
     // state.value += action.payload
    //},
  },
})

// Action creators are generated for each case reducer function
export const { setProdutos, setDetalhes } = counterSlice.actions

export default counterSlice.reducer