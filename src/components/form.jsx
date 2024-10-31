/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";
import { editForm, saveForm } from "../store/slices/produto/actions";
import { useNavigate } from "react-router-dom";

function Form({ isEdit }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const produto = useSelector((state) => state.produto.detalhe);

  const changeField = (field, value) => dispatch(editForm(field, value));

  const submitForm = () => dispatch(saveForm(isEdit)).then(() => navigate("/"));

  return (
    <div className="cadastro mt-10">
      <div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="nome"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Nome
            </label>
            <input
              type="text"
              id="nome"
              onChange={(e) => changeField("nome", e.target.value)}
              placeholder="Digite aqui o Produto"
              value={produto?.nome || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="categoria"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Categoria
            </label>
            <input
              type="text"
              id="categoria"
              onChange={(e) => changeField("categoria", e.target.value)}
              placeholder="Digite sua categoria"
              value={produto?.categoria || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="preco"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Preço
            </label>
            <input
              type="preco"
              id="preco"
              onChange={(e) => changeField("preco", e.target.value)}
              placeholder="Digite valor unitário"
              value={produto?.preco || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="estoque"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Estoque
            </label>
            <input
              type="estoque"
              id="estoque"
              onChange={(e) => changeField("estoque", e.target.value)}
              placeholder="Digite a quantidade"
              value={produto?.estoque || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          onClick={submitForm}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Salvar
        </button>
      </div>
    </div>
  );
}

export default Form;

// <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
// const handleSubmit = (event) => {
//   event.preventDefault();
//   console.log("Nome submetido:", nome);
// }
