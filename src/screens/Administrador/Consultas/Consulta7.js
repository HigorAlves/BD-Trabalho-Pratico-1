import React, { Component } from 'react';
import Navbar from '../../../components/NavBarAdm';

export default class Consulta6 extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h4>Quantidade de Publicações por Agência de Fomento e por período</h4>
              <hr />
              <form>
                <div className='form-row'>
                  <div class="form-group col-sm-12 col-md-4">
                    <label for="inputNome">Agencia de Fomento</label>
                    <input type="text" class="form-control" id="inputNome" aria-describedby="nome" placeholder="Insira o nome" />
                  </div>
                  <div class="form-group col-sm-12 col-md-4">
                    <label for="inputNome">Data Inicio</label>
                    <input type="text" class="form-control" id="inputNome" aria-describedby="nome" placeholder="Insira o nome" />
                  </div>
                  <div class="form-group col-sm-12 col-md-4">
                    <label for="inputNome">Data Final</label>
                    <input type="text" class="form-control" id="inputNome" aria-describedby="nome" placeholder="Insira o nome" />
                  </div>
                </div>
                <button type="submit" class="btn btn-primary my-2">Pesquisar</button>
              </form>
              <h4>Valor Total: </h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}