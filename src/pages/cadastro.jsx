import { useState } from "react";
import Form from "../components/form";
import { cadastroProdutoApi } from "../services/api";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const setChange = (field, value) =>
    setForm({
      ...form,
      [field]: value,
    });

  const cadastraProduto = async () => {
    try {
      await cadastroProdutoApi(form);
      alert(`Cadastrado do Produto ${form.nome} feito com sucesso`);
      setForm({});
      navigate("/");
    } catch {
      throw new Error("não foi possível cadastrar");
    }
  };

  return (
    <>
      {JSON.stringify(form)}
      <Form produto={form} change={setChange} submit={cadastraProduto} />
    </>
  );
}

export default Cadastro;