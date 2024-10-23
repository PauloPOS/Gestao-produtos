// @flow
//import * as React from 'react';

//import { useState } from "react";
import "../assets/styleGlobal.css";


function Form() {

  //const [nome, setNome] = useState('')
  return (
    <div className="cadastro">
      <div className="field">
        <label>Nome:</label>
        <input type="text" onChange={(e) => console.log(e.target.value) }
         placeholder="Nome" />
      </div>
      <div className="field">
        <label>Categoria:</label>
        <input type="text" placeholder="Categoria" />
      </div>
      <div className="field">
        <label>Preço:</label>
        <input type="text" placeholder="Preco" />
      </div>
      <div className="field">
        <label>Estoque:</label>
        <input type="text" placeholder="Estoque" />
      </div>
      <div className="field">
      <button>Salvar</button>
      </div>
    </div>



  );
}

export default Form;
