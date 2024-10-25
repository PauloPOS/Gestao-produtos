import { Link } from "react-router-dom";
import "../assets/styleGlobal.css";

function ErrorProduto() {
  return (
    <div className="error">
      <h2>Produto não encontrado.</h2>
      <h5>Não foi possível encontrar o produto buscado</h5>
      <br />
      <br />
      <Link to="/">Volte para pagina Inicial</Link>
    </div>
  );
}

export default ErrorProduto;
