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

export async function cadastroProdutoApi(form) {
    // poderiam usar o axios
    try {
      await http.post(`/produtos/`, form);
    } catch {
      throw new Error("não foi possível cadastrar");
    }
  }
  export async function editProdutoApi(form) {
    // poderiam usar o axios
    try {
      await http.patch(`/produtos/${form.id}`, form);
    } catch {
      throw new Error("não foi possível atualizar");
    }
  }
  
  export async function detalhesProdutoApi(id) {
    // poderiam usar o axios
    try {
      return await http.get(`/produtos/${id}`);
    } catch {
      throw new Error("não foi possível atualizar");
    }
  }
  