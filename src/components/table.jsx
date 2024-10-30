/* eslint-disable react/prop-types */
//import React from 'react';
import { useNavigate } from "react-router-dom";
import { columns } from "../config/columns-produtos";
import { FaEdit, FaTrash } from "react-icons/fa";

// eslint-disable-next-line no-unused-vars
function Table({ produtos, deleteFn }) {

    const navigate = useNavigate();
    return (
        <div className="relative overflow-x-auto shadow-md smt-10">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {columns.produtos.map((column, i) => (
                            <th key={i} scope="col" className="px-2 py-3">
                                {column}
                            </th>
                        ))}
                        <th className="px-1 py-3">Editar</th>
                        <th className="px-1 py-3">Excluir</th>
                        </tr>
                </thead>
                <tbody>
          {produtos.map((item, i) => (
            <tr
              key={i}
              className="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-2 py-4">{item.id}</td>
              <td className="px-2 py-4">{item.nome}</td>
              <td className="px-2 py-4">{item.categoria}</td>
              <td className="px-2 py-4">{item.preco}</td>
              <td className="px-2 py-4">{item.estoque}</td>
              <td className=" py-4 text-center justify-center">
                <button
                  onClick={() => null}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <FaEdit />
                </button>
              </td>
              <td className="flex py-4 text-center justify-center">
                <button
                  onClick={() => navigate('/detalhes/${item.id}')}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
            </table>
        </div>

    );
}

export default Table;