import "./assets/styleGlobal.css";
import Layout from "./components/layout";
import Table from "./components/table";
import { useEffect } from "react";
import { useState } from "react";
import { deleteProdutosApi, getProdutosApi } from "./services/api";
import Topo from "./components/topo_act";
import Form from "./components/form";



function App() {
  const [produtos, setProdutos] = useState([]); // Array vazio como valor inicial
  const [showList, setShowList] = useState(false); // Corrige o estado de showList

  // Deleta produtos

  const deleteProdutos = async (id) => {
    try {
      await deleteProdutosApi(id);
      await getProdutos()
    } catch {
      alert("aconteceu erro app ");
    }
  };
    //Busca produtos
 
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
     { /* Renderização condicionada (basicao) 
     Renderização condicional: Se showList for true, o componente <Table /> será renderizado, e se for false, o componente <Form /> será renderizado.*/ }
      <Topo show={showList} act={setShowList} /> {/* Passa as props corretas */}
  
      {showList ? (
        <Table produtos={produtos} deleteFn={deleteProdutos} /> // Mostra a tabela se showList for verdadeiro 
      ) : (
        <Form />
      )}
  
    </Layout>
  );
}
export default App;
