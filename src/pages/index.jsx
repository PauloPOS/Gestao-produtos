import "../assets/styleGlobal.css";
import Table from "../components/table.jsx";
import { useEffect, useState } from "react";
import { deleteProdutosApi, getProdutosApi } from "../services/api";
import Form from "../components/form";
function Initial() {
  const [produtos, setProdutos] = useState([]);
  const [showList, setShowList] = useState(true);
  const [form, setForm] = useState({});
  const [update, setUpdate] = useState(false);

  // deletar os produtos
  const deleteProdutos = async (id) => {
    try {
      await deleteProdutosApi(id);
      await getProdutos();
    } catch {
      alert("aconteceu um erro");
    }
  };
  // buscar os produtos
  const getProdutos = async () => {
    const data = await getProdutosApi();
    setProdutos(data);
  };

   // eslint-disable-next-line no-unused-vars
   const cadastro = (value) => {
    setShowList(value);
   setUpdate(false);
    };
  const editForm = (value) => {
    console.log(value);
    setForm(value);
    setShowList(!setShowList);
    setUpdate(true);

    // forma diferente de tratar a promise
  };

  //ciclo de vida do componente
  useEffect(() => {
    console.log("atualizad");
    getProdutos();
  }, [showList]);

  return (
    <>
      {showList ? (
        <Table produtos={produtos} deleteFn={deleteProdutos} editForm={editForm} />
      ) : (
        <Form act={setShowList} form={form} setForm={setForm} update={update} />
      )}
    </>
  );
}

export default Initial;
