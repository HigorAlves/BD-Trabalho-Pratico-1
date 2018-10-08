import React, { Component } from 'react';
import Navbar from '../../components/NavBarAdm';

export default class AlterarTipousuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cpf_usr: null
    }

    this.handleChangeCpf = this.handleChangeCpf.bind(this);
  }

  handleChangeCpf(event) {
    this.setState({ cpf_usr: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let dataCadastro = new Date();
    fetch(`http://localhost:4000/usuarios/cadastrar?cpf_usr=${this.state.cpf_usr}&nome=${this.state.nome}&senha=${this.state.senha}&logradouro=${this.state.logradouro}&numero=${this.state.numero}&bairro=${this.state.bairro}&cep=${this.state.cep}&datacad=${dataCadastro}`)
      .then(response => response.json())
      .catch(error => console.error(error));
  }

  render() {
    return (
      <section>
        <Navbar />
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <div className="w-400 mw-100 p-6 telaCentralizada backgroundSeparador">
                <h5 className="mb-7 py-3">Cadastre um Administrador</h5>

                <form onSubmit={this.handleSubmit}>
                  <div class="form-group">
                    <label for="inputCpf">Insira o CPF do usuario</label>
                    <input type="text" class="form-control" id="inputCpfg" placeholder="CPF" value={this.state.cpf_usr} onChange={this.handleChangeCpf} required />
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" />
                    <label class="form-check-label" for="inlineRadio1">Administrador</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2" />
                    <label class="form-check-label" for="inlineRadio2">Pro-Reitor</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3" />
                    <label class="form-check-label" for="inlineRadio3">Pesquisador</label>
                  </div>
                  <br />
                  <button type="submit" class="btn btn-success my-2">Cadastrar</button>
                </form>

              </div>

            </div>
          </div>
        </div>
      </section>
    )
  }
}