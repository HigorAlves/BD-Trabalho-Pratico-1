import React, { Component } from 'react';
import Navbar from '../../../components/NavBarAdm';

export default class CadastroTipoPublicacao extends Component {
  render() {
    return (
      <section>
        <Navbar />
        <div className='container'>
          <h4>Cadastro Tipo Publicação</h4>
          <div className='row'>
            <div className='col-6'>
              <hr />
              <form>
                <div class="form-group">
                  <label for="inputNome">Nome</label>
                  <input type="text" class="form-control" id="inputNome" aria-describedby="nome" placeholder="Insira o nome" />
                </div>
                <button type="submit" class="btn btn-primary my-2">Salvar</button>
              </form>
            </div>

            <div className='col-6'>
              <hr />
              <form>
                <div class="form-group">
                  <label for="inputNomeArea">CPF</label>
                  <input type="text" class="form-control" id="inputNomeArea" aria-describedby="nome" placeholder="Insira o CPF" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}