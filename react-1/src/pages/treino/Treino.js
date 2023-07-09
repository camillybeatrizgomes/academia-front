import './treino.css'
import image from '../../images/Gym-rafiki.png'
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import {mensagemErro, notifyError, notifySuccess } from '../util/util'
import Select from 'react-select';

function Treino (){

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }
    
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { state } = useLocation();

	const [idTreino, setIdTreino] = useState();
	const [nome, setNome] = useState();
	const [frequencia, setFrequencia] =  useState();
	const [dataInicio, setDataInicio] =  useState();
	const [exercicio, setExercicio] =  useState();
	const [repeticoes, setRepeticoes] =  useState();
	const [serie, setSerie] =  useState();
	const [carga, setCarga] =  useState();

	useEffect(() => {

		if (state != null && state.id != null) {
			
			axios.get("http://localhost:8082/exercicio" + state.id)
			.then((response) => {
				setIdTreino(response.data.id)
				setNome(response.data.nome)
				setFrequencia(response.data.frequencia)
				setDataInicio(response.data.dataInicio)
				setExercicio(response.data.exercicio)
                setRepeticoes(response.data.repeticoes)
				setSerie(response.data.serie)
				setCarga(response.data.carga)
			})
		}
		
	}, [state])

	function salvar() {

		let treino = {
			nome: nome,
			frequencia: frequencia,
			dataInicio: dataInicio,
			exercicio: exercicio,
            repeticoes: repeticoes,
			serie: serie,
			carga: carga
		}
    
        axios.post("http://localhost:8082/exercicio", treino)
			.then((response) => {  notifySuccess('Treino cadastrado com sucesso.') })
			.catch((error) => { { if (error.response) {
                notifyError(error.response.data.errors[0].defaultMessage)
                } else {
                notifyError(mensagemErro)
                }}})  
  
    }     
    return(
        <>
        <div class="box-treino">
        <div class="img-box-treino">
            <img src={image}/>
        </div>
        <div class="form-box-treino">
            <h2>Criar Treino</h2>
            
            <form action="#">
                <div class="input-treino">
                    <label for="nome"> Nome do Treino </label>
                    <input type="text" id="nome" placeholder="Digite o nome do treino" 
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    required/>
                </div>

                <div class="input-treino">
                    <label for="frequencia"> Frequência </label>
                    <input type="text" id="frequencia" placeholder="Digite a frequência do treino" 
                    value={frequencia}
                    onChange={e => setFrequencia(e.target.value)}
                    required/>
                </div>

                <div class="input-treino">
                    <label for="data"> Data de Início </label>
                    <input type="date" name="data" id="data" 
                    value={dataInicio}
                    onChange={e => setDataInicio(e.target.value)}
                    />
                </div>

                <div class="input-treino">
                <button onClick={toggleModal} className="btn-modal" id="ex">
                    + Adicionar exercicio
                </button>

                {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
       
    
          <Select
          width={12}
            isMulti
            placeholder="selecione o treino"
            name="colors"
            className="basic-multi-select"
            classNamePrefix="select"
         />
        <form class="ui form">
  <div class="field">
    <label className='label-modal'>Nº Séries</label>
    <input type="text" name="first-name" placeholder="nº de séries do exercicio" id='inputs-modal' />
  </div>
  <div class="field">
    <label className='label-modal'>Nº repetições</label>
    <input type="text" name="last-name" placeholder="Número de repetições dp exercicio" id='inputs-modal' />
  </div>
  <div class="field">

  <div class="field">
     <div class="ui form">
        <div class="field">
           <label>Comentários</label>
               <textarea id='inputs-modal' class="comentario"> </textarea>
        </div>
      </div> 
    </div>
  <div class="field"></div>


  </div>
  <button class="ui button" type="submit" style={{marginTop:'-6rem'}}>Salvar</button>
</form>
         
     
          </div>
        </div>
      )}
                    <button>Cadastrar</button>
                </div>

            </form>
        </div>
    </div>
        </>
    )
}

export default Treino;