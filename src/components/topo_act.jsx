import { FaRegRectangleList } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import "../assets/styleGlobal.css"
// eslint-disable-next-line react/prop-types
function Topo({ show, act }) {
  return (
    <div className="topo">
      <button onClick={() => act(!show)} className="btn">
        {show ? "Cadastro" : "Listagem"}
        <span className="icon">{show ? <GoPlus /> : <FaRegRectangleList />}</span>
      </button>
    </div>
  );
}

export default Topo;