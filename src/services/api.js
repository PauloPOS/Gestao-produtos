import http from "../config/http";

export async function getProdutosApi(){

    // poderiam usaro axios  ( ver depois)
    const produtos = await http.get("/produtos");
    return produtos.data;
}
            // usando o axios 
export async function deleteProdutosApi(id){
    console.log("ID do produto para deletar:", id);

    try {    
        await http.delete(`/produtos/${id}`);     
    } catch {
        throw new Error ("Erro ao deletar o produto");
    }
  
}