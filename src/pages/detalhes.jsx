import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/form";
import ErrorProduto from "../components/error";
import { useDispatch, useSelector } from "react-redux";
import { getDetalhesProduto } from "../store/slices/produto/actions";

function Detalhes() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const produto = useSelector((state) => state.produto.detalhe);


  useEffect(() => {
    dispatch(getDetalhesProduto(id));
  }, [dispatch, id]);


  if (!produto) {
    return <ErrorProduto />;
  } else {
    return <Form isEdit />;
  }
}


export default Detalhes;
