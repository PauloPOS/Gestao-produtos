/* eslint-disable react/prop-types */
//import React from 'react';
import { useNavigate } from "react-router-dom";
import { columns} from "../config/columns-produtos"
import { FaEdit, FaTrash } from "react-icons/fa";

// eslint-disable-next-line no-unused-vars
function Table  ({ produtos, deleteFn, editForm }) {
  const navigate = useNavigate();
    return (
        <table>
          
        <thead>
          <tr>
            {columns.produtos.map((column, i) => (
              <th key={i}>{column.toUpperCase()}</th>
            ))}
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((item,i)=>(
            <tr key={i}>
            <td>{item.id}</td>
            <td>{item.nome}</td>
            <td>{item.categoria}</td>
            <td>{item.preco}</td>
            <td>{item.estoque}</td>
            
            <td>
            <button
                onClick={() => navigate(`/detalhes/${item.id}`)}
                className="btn btn-editar"
              >
                <FaEdit />
              </button>
            </td>
            <td>
               <button 
               onClick={() => deleteFn(item.id)} 
               className="btn btn-excluir">Excluir
                
                <FaTrash />
               </button> 
          
            </td>
          </tr>
          ))}
        </tbody>
     
      </table>
    );
  }

export default Table;