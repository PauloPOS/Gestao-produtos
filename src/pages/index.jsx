
import Table from "../components/table.jsx";
import { useEffect} from "react";
import { useDispatch } from "react-redux";
import { getAllProdutos } from "../store/slices/produto/actions.js";


function Initial() {
  const dispatch = useDispatch();

  //ciclo de vida do componente
  useEffect(() => {
    dispatch(getAllProdutos());
  }, []);
  return <Table/>;
}

export default Initial;
