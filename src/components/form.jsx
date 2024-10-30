/* eslint-disable react/prop-types */

function Form({ produto, change, submit }) {

  console.log("Produto:", produto);
  console.log("Change Function:", change);
  console.log("Submit Function:", submit);

  return (
    <div className="cadastro mt-10">
      <form>
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
              onChange={(e) => change("nome", e.target.value)}
              placeholder="Digite aqui o Nome"
              value={produto?.nome || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="idade"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Categoria
            </label>
            <input
              type="text"
              id="idade"
              onChange={(e) => change("categoria", e.target.value)}
              placeholder="Digite a Categoria"
              value={produto?.categoria || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Preço
            </label>
            <input
              type="turma"
              id="turma"
              onChange={(e) => change("preco", e.target.value)}
              placeholder="Digite o Preço"
              value={produto?.preco || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Estoque
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => change("estoque", e.target.value)}
              placeholder="Digite a quantidade no Estoque"
              value={produto?.estoque || ""}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          onClick={submit}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Salvar
        </button>
      </form>
    </div>
  );
}


export default Form;

