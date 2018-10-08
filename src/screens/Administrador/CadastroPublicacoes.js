import React, { Component } from 'react';
import Navbar from '../../components/NavBarAdm';

export default class CadastroPublicacoes extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h4>Cadastar Agencia de Fomento</h4>
              <hr />
              <form>
                <div class="form-group">
                  <label for="inputIdentificador">Identificador</label>
                  <input type="text" class="form-control" id="inputNome" aria-describedby="nome" placeholder="Identificador" />
                </div>
                <div class="form-group">
                  <label for="inputNome">Título</label>
                  <input type="text" class="form-control" id="inputNome" aria-describedby="nome" placeholder="Titulo" />
                </div>
                <div class="form-group">
                  <label for="inputNome">Titulo Alternativo</label>
                  <input type="text" class="form-control" id="inputNome" aria-describedby="nome" placeholder="titulo alternativo" />
                </div>
                <div class="form-group">
                  <label for="inputData">Data de cadastro</label>
                  <input type="text" class="form-control" id="inputData" aria-describedby="data" placeholder="DD/MM/YYYY" />
                </div>
                <div class="form-group">
                  <label for="inputData">Nome do Autor</label>
                  <input type="text" class="form-control" id="inputData" aria-describedby="data" placeholder="Nome completo" />
                </div>
                <div class="form-group">
                  <label for="inputData">Idioma</label>
                  <input type="text" class="form-control" id="inputData" aria-describedby="data" placeholder="DD/MM/YYYY" />
                </div>
                <div class="form-group">
                  <label for="inputData">Pais</label>
                  <input type="text" class="form-control" id="inputData" aria-describedby="data" placeholder="DD/MM/YYYY" />
                </div>
                <div class="form-group">
                  <label for="inputData">Resumo</label>
                  <input type="text" class="form-control" id="inputData" aria-describedby="data" placeholder="DD/MM/YYYY" />
                </div>
                <div class="form-group">
                  <label for="inputData">Palavra-chave</label>
                  <input type="text" class="form-control" id="inputData" aria-describedby="data" placeholder="DD/MM/YYYY" />
                </div>

                <div class="form-group">
                  <label for="inputIdentificadorEsp">Area</label>
                  <select id="inputIdentificadorEsp" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="inputIdentificadorEsp">Tipo Publicação</label>
                  <select id="inputIdentificadorEsp" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="inputIdentificadorEsp">Agencia de Fomento</label>
                  <select id="inputIdentificadorEsp" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="inputData">Documento</label>
                  <input type="text" class="form-control" id="inputData" aria-describedby="data" placeholder="DD/MM/YYYY" />
                </div>

                <div class="form-group">
                  <label for="inputIdentificadorEsp">CPF Administrador</label>
                  <select id="inputIdentificadorEsp" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="inputIdentificadorEsp">CPF Pesquisador</label>
                  <select id="inputIdentificadorEsp" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <button type="submit" class="btn btn-primary my-2">Salvar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}