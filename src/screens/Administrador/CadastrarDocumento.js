import React, { Component } from 'react';
import Navbar from '../../components/NavBarAdm';

export default class CadastrarDocumento extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h4>Cadastrar Documento</h4>
              <hr />
              <form>
                <div class="form-group">
                  <label for="inputNome">Descrição</label>
                  <input type="text" class="form-control" id="inputNome" aria-describedby="nome" placeholder="Insira o nome" />
                </div>
                <div class="form-group">
                  <label for="inputData">Caminho</label>
                  <input type="text" class="form-control" id="inputData" aria-describedby="data" placeholder="link para o doc" />
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