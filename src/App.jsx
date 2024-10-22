import "./assets/styleGlobal.css";
import Layout from "./components/layout";
import Table from "./components/table";
import { useEffect } from "react";
import { useState } from "react";
import { deleteProdutosApi, getProdutosApi } from "./services/api";
import Form from "./components/form";

function App() {

  const [produtos, setProdutos] = useState([]); // Array vazio como valor inicial

  // Deleta produtos

  const deleteProdutos = async (id) => {
    try {
      await deleteProdutosApi(id);
      await getProdutos()
    } catch {
      alert("aconteceu erro app ");
    }

    //Busca produtos
  };
  const getProdutos = async () => {
    const data = await getProdutosApi();
    setProdutos(data);
  };

  //Ciclo de vida do componente
  useEffect(() => {
    getProdutos()
  }, []);

  return (
    <Layout>
      <Form/>
      <Table produtos={produtos} deleteFn={deleteProdutos} />
    </Layout>
  );
}
export default App;
