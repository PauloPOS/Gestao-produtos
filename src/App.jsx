import "./assets/styleGlobal.css";
import Layout from "./components/layout";

function App() {
  return (
    <Layout>
      <h1>Gestão de Produtos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome do Produto</th>
            <th>Categoria</th>
            <th>Preço</th>
            <th>Estoque</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Produto A</td>
            <td>Eletrônicos</td>
            <td>R$ 500,00</td>
            <td>20</td>
            <td>
              <a href="#" className="btn-editar">Editar</a>
            </td>
            <td>
              <a href="#" className="btn-excluir">Excluir</a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Produto B</td>
            <td>Móveis</td>
            <td>R$ 1.200,00</td>
            <td>10</td>
            <td>
              <a href="#" className="btn-editar">Editar</a>
            </td>
            <td>
              <a href="#" className="btn-excluir">Excluir</a>
            </td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
}

export default App;
