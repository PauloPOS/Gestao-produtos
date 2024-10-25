import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detalhesProdutoApi, editProdutoApi } from "../services/api";
import Form from "../components/form";
import { useNavigate } from "react-router-dom";
import ErrorProduto from "../components/error";

function Detalhes() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [produto, setProduto] = useState(null);

  const setChange = (field, value) =>
    setProduto({
      ...produto,
      [field]: value,
    });

  const updateProduto = async () => {
    try {
      await editProdutoApi(produto);
      alert(`Atualizado o produto ${produto?.nome} feito com sucesso`);
      setProduto({});
      navigate("/");
    } catch {
      throw new Error("não foi possível cadastrar");
    }
  };

  useEffect(() => {
    (async () => {
      const produto = await detalhesProdutoApi(id);
      setProduto(produto.data);
    })();
  }, [id]);

  if (!produto) {
    return <ErrorProduto/>;
  } else {
    return <Form produto={produto} change={setChange} submit={updateProduto} />;
  }
}

export default Detalhes;
