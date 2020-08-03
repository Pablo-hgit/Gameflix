import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const [ categorias, setCategorias] = useState (['teste']);
   const [nomeDaCategoria, setNomeDaCategoria] = useState('Valor Inicial');  
  return(
      <PageDefault>
          <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>
          
          <form onSubmit={function handleSubmit(infosDoEvento){
            infosDoEvento.preventDefault()
            console.log('Voce tentou inviar o form ne')
            setCategorias([
              ...categorias,
              nomeDaCategoria
            ]);
          }}>
            {/* State */}
            <label>
              Nome da categoria
              <input
                 type="text"
                 value={nomeDaCategoria}
                 onChange={function Handler(infosDoEvento) {
                 
                   setNomeDaCategoria(infosDoEvento.target.Value) 
                }}

               />

            </label>
          
            <button>
              Cadastrar
            </button>
          </form>
          
          <ul>
            {categorias.map((categoria, indice) => {
              return(
              <li key={`${categoria}${indice}`}>
                {categoria}
              </li>
              )
          })}
          </ul>
      
       <Link to="/">
         Ir para home
       </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;