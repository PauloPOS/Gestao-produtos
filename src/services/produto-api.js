import http from "../config/http";

const pathIdentify = "/produtos";

/**
 * Carrega todos os produtos do banco.
 */
async function getAll() {
  const produtos = await http.get(pathIdentify);
  return produtos.data;

  // exemplo
  // return new Promise((res) => {
  //   return setTimeout(async () => {
  //     const produtos = await http.get(pathIdentify);
  //     res(produtos.data);
  //   }, 5000);
  // });
}
/**
 * Faz a remoção do arquivo na api.
 * @param {id} id - identificador do produto na api
 */
async function remove(id) {
  // poderiam usar o axios
  try {
    await http.delete(`${pathIdentify}/${id}`);
  } catch {
    throw new Error("## Não foi possível deletar");
  }
}
/**
 * Faz a remoção do arquivo na api.
 * @param {produto} produto - objeto do produto (...deve ser definido na interface)
 */

/**
 * Faz o cadastro na api.
 * @param {produto} produto - objeto do produto (...deve ser definido na interface)
 */
async function create(produto) {
  try {
    await http.post(pathIdentify, produto);
  } catch {
    throw new Error("## Não foi possível cadastrar");
  }
}
async function update(produto) {
  // poderiam usar o axios
  try {
    await http.patch(`${pathIdentify}/${produto.id}`, produto);
  } catch {
    throw new Error("## Não foi possível atualizar");
  }
}
/**
 * Para obter os dados do produto
 * @param {id} id - string
 */
async function getById(id) {
  // poderiam usar o axios
  try {
    return await http.get(`${pathIdentify}/${id}`);
  } catch {
    throw new Error("não foi possível atualizar");
  }
}

export default {
  getAll,
  remove,
  create,
  update,
  getById,
};
