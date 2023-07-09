import './listatreino.css';
import axios from "axios";
import Select from 'react-select';
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {mensagemErro, notifyError, notifySuccess } from '../util/util'

function ListaTreino(){
    const [isOpen, setIsOpen] = useState(false);

        const openModal = () => {
        setIsOpen(true);
  };

    const closeModal = () => {
     setIsOpen(false);
  };
     
    return (
       <div>
            <header>
                <h2>Sua Tabela de Treino</h2>
            </header>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Repetições</th>
                        <th>Séries</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={openModal}>Abrir Modal</button>
      {isOpen && (
        <div className="modal-lista">
          <div className="modal-content-list">
            <h2>Ficha de Treino</h2>
            <p>Conteúdo do modal</p>
            <button onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}
            
        </div>
    )
}

export default ListaTreino
