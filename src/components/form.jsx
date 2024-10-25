/* eslint-disable react/prop-types */
import "../assets/styleGlobal.css";
function Form({ produto, change, submit }) {

  console.log("Produto:", produto);
  console.log("Change Function:", change);
  console.log("Submit Function:", submit);

  return (
    <div className="cadastro">
      <div className="field">
        <label>Nome:</label>
        <input
          type="text"
          value={produto.nome || ""}
          onChange={(e) => change("nome", e.target.value)}
          placeholder="Digite o Nome do Produto"
        />
      </div>
      <div className="field">
        <label>Categoria:</label>
        <input
          type="text"
          value={produto.categoria || ""}
          onChange={(e) => change("categoria", e.target.value)}
          placeholder="Digite a Categoria"
        />
      </div>
      <div className="field">
        <label>Preço:</label>
        <input
          type="number"
          value={produto.preco || ""}
          onChange={(e) => change("preco", e.target.value)}
          placeholder="Digite o Preço"
        />
      </div>
      <div className="field">
        <label>Estoque:</label>
        <input
          type="number"
          value={produto.estoque || ""}
          onChange={(e) => change("estoque", e.target.value)}
          placeholder="Digite o Estoque"
        />
      </div>
      <div className="field">
        <button onClick={() => submit()}>Salvar</button>
      </div>
    </div>
  );
}


export default Form;

