import { getProdutosApi } from "../services/api";
import { setProdutos } from "../store/slices/produto/reducer";


export const getAllProdutos = () => async (dispatch) => {

       try {
        
        const result = await getProdutosApi();
      
        dispatch(setProdutos(result))
       } catch (error){
              console.log('error', error)

        }
export const getDetalhesProduto = () => async (dispatch) => {

       try {
               
       const result = await getProdutosApi();     
            dispatch(setProdutos(result))

       } catch (error){
               console.log('error', error)

    }
               
        
};