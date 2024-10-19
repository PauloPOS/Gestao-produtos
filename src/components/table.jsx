/* eslint-disable react/prop-types */
//import React from 'react';
import { columns} from "../config/columns-produtos"

function Table  ({ produtos, deleteFn }) {
    
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
              <a href="#" className="btn btn-editar">Editar</a>
            </td>
            <td>
               <button 
               onClick={() => deleteFn(item.id)} 
               className="btn btn-excluir">Excluir
                
               </button> 
          
            </td>
          </tr>
          ))}
        </tbody>
     
      </table>
    );
  }

export default Table;