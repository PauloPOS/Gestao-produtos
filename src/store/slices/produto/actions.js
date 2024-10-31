import ProdutoApi from "../../../services/produto-api";
import { setProdutos, setDetalhes, setLoading } from "./reducer";
import Swal from "sweetalert2";

export const getAllProdutos = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const result = await ProdutoApi.getAll();
    dispatch(setProdutos(result));
  } catch (error) {
    console.log("error", error);
  }
  dispatch(setLoading(false));
};
export const getDetalhesProduto = (id) => async (dispatch) => {
  try {
    const result = await ProdutoApi.getById(id);
    dispatch(setDetalhes(result.data));
  } catch (error) {
    console.log("error", error);
  }
};
export const editForm = (field, value) => async (dispatch, getState) => {
  const produto = getState().produto.detalhe;

  dispatch(
    setDetalhes({
      ...produto,
      [field]: value,
    }),
  );
};
export const saveForm =
  (editForm = false) =>
  async (dispatch, getState) => {
    try {
      const produto = getState().produto.detalhe;
      const action = editForm ? ProdutoApi.update : ProdutoApi.create;
      await action(produto);
      dispatch(getAllProdutos());

      Swal.fire({
        title: "Sucesso !",
        text: `O produto ${editForm ? "editado" : "cadastrado"} com sucesso.`,
        icon: "success",
      });

      return Promise.resolve();
    } catch {
      Swal.fire({
        title: "OPS !",
        text: `Aconteceu um erro ao cadastrar o produto`,
        icon: "error",
      });
      throw new Error(
        `Não foi possível ${editForm ? "atualizar" : "cadastrar"}`,
      );
    }
  };

export const deleteProduto = (produto) => async (dispatch) => {
  Swal.fire({
    title: `Deseja excluir o produto ${produto.nome}`,
    text: "Após a exclusão essa tarefa não poderá ser desfeita.",
    icon: "info",
    showCancelButton: true,
    cancelButtonText: "Cancelar",
    cancelButtonColor: "#cccc",
    confirmButtonText: "Confirmar Exclusão",
    confirmButtonColor: "green",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await ProdutoApi.remove(produto.id);
        Swal.fire({
          title: "Sucesso !",
          text: `Produto ${produto.nome} excluído com sucesso`,
          icon: "success",
        });
        dispatch(getAllProdutos()); // carrega novamente a lista;
      } catch (error) {
        // Existe 2 possibilidades de tratamento de error
        // 1 - Retornar diretamente da API (caso incomun)
        // 2 - Fazer o tratamento diretamento no frontend (comum)

        console.log(error.message);
        Swal.fire({
          title: "Ops !!!",
          text: error.message || `Aconteceu um erro ao tentar deletar`,
          icon: "error",
        });
      }
    }
  });
};
