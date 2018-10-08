import React, { Component } from 'react';
import Navbar from '../../components/NavBarAdm';

export default class AlterarTipousuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: [],
      selecionado: null,
      cpf_usr: null,
      nome: null,
      senha: null,
      logradouro: null,
      numero: null,
      bairro: null,
      cep: null,
      cadastrou: null
    }

    this.handleChangeCpf = this.handleChangeCpf.bind(this);
    this.handleChangeNome = this.handleChangeNome.bind(this);
    this.handleChangeSenha = this.handleChangeSenha.bind(this);
    this.handleChangeLogradouro = this.handleChangeLogradouro.bind(this);
    this.handleChangeNumero = this.handleChangeNumero.bind(this);
    this.handleChangeBairro = this.handleChangeBairro.bind(this);
    this.handleChangeCep = this.handleChangeCep.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeCpf(event) {
    this.setState({ cpf_usr: event.target.value });
  }
  handleChangeNome(event) {
    this.setState({ nome: event.target.value });
  }
  handleChangeSenha(event) {
    this.setState({ senha: event.target.value });
  }
  handleChangeLogradouro(event) {
    this.setState({ logradouro: event.target.value });
  }
  handleChangeNumero(event) {
    this.setState({ numero: event.target.value });
  }
  handleChangeBairro(event) {
    this.setState({ bairro: event.target.value });
  }
  handleChangeCep(event) {
    this.setState({ cep: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let dataCadastro = new Date();
    fetch(`http://localhost:4000/usuarios/cadastrar?cpf_usr=${this.state.cpf_usr}&nome=${this.state.nome}&senha=${this.state.senha}&logradouro=${this.state.logradouro}&numero=${this.state.numero}&bairro=${this.state.bairro}&cep=${this.state.cep}&datacad=${dataCadastro}`)
      .then(response => response.json())
      .catch(error => console.error(error));
  }

  getUsers = () => {
    fetch('http://localhost:4000/usuarios')
      .then(response => response.json())
      .then(response => this.setState({ usuarios: response.data }))
      .catch(error => console.error(error))
  }

  setDropdown = (usuario, index) => {
    return (
      <option value={usuario.cpf_usr}>{usuario.nome}</option>
    )
  }

  componentWillMount() {
    this.getUsers();

  }

  preencherDados = (event) => {
    this.setState({ selecionado: event.target.value });
    this.state.usuarios.map((usuario) => {
      // console.log('Event', event.target.value)
      // console.log('CPF', usuario.cpf_usr)
      if (usuario.cpf_usr == event.target.value) {
        this.setState({ cpf_usr: usuario.cpf_usr })
        this.setState({ nome: usuario.nome })
        this.setState({ senha: usuario.Senha })
        this.setState({ logradouro: usuario.Logradouro })
        this.setState({ numero: usuario.Numero })
        this.setState({ bairro: usuario.Bairro })
        this.setState({ cep: usuario.Cep })
      }
    })
  }

  render() {

    return (
      <section>
        <Navbar />
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className="w-400 mw-100 p-6">
                <h5 className="mb-7 py-3">Alterar dados do Usuario</h5>

                <form onSubmit={this.handleSubmit}>
                  <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Escolha o usuario</label>
                  <select class="custom-select my-1 mr-sm-2" id="dropdownUsuario" onChange={this.preencherDados} value={this.state.selecionado}>
                    {this.state.usuarios.map((usuario, index) => this.setDropdown(usuario, index))}
                  </select>

                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputCpf">CPF</label>
                      <input type="text" class="form-control" id="inputCpfg" placeholder="CPF" value={this.state.cpf_usr} onChange={this.handleChangeCpf} required />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputNome">Nome Completo</label>
                      <input type="text" class="form-control" id="inputNome" placeholder="Nome Completo" value={this.state.nome} onChange={this.handleChangeNome} required />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputSenha">Senha</label>
                      <input type="password" class="form-control" id="inputSenha" placeholder="Senha" value={this.state.senha} onChange={this.handleChangeSenha} required />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputLogradouro">Logradouro</label>
                      <input type="text" class="form-control" id="inputLogradouro" placeholder="Logradouro" value={this.state.logradouro} onChange={this.handleChangeLogradouro} required />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-4">
                      <label for="inputNumero">Numero</label>
                      <input type="text" class="form-control" id="inputNumero" value={this.state.numero} onChange={this.handleChangeNumero} required />
                    </div>
                    <div class="form-group col-md-4">
                      <label for="inputBairro">Bairro</label>
                      <input type="text" class="form-control" id="inputBairro" value={this.state.bairro} onChange={this.handleChangeBairro} />
                    </div>
                    <div class="form-group col-md-4">
                      <label for="inputCep">CEP</label>
                      <input type="text" class="form-control" id="inputCep" value={this.state.cep} onChange={this.handleChangeCep} />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputDataNascimento">Data Nascimento</label>
                    <input type="text" class="form-control" id="inputCep" value={this.state.cep} onChange={this.handleChangeCep} />
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
                  <button type="submit" class="btn btn-success my-2">Alterar Dados</button>
                </form>

              </div>

            </div>
          </div>
        </div>
      </section>
    )
  }
}