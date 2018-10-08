import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/NavBarAdm';
export default class ListagemUsuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios_cadastrados: []
    }
    this.renderizaUsuarios = this.renderizaUsuarios.bind(this);
    this.getUsers = this.getUsers.bind(this);
  }

  renderizaUsuarios = props => {
    return (
      <tbody>
        <tr>
          <td>{props.cpf_usr}</td>
          <td>{props.nome}</td>
          <td>{props.Senha}</td>
          <td>{props.Logradouro}</td>
          <td>{props.Numero}</td>
          <td>{props.Bairro}</td>
          <td>{props.Cep}</td>
          <td>{props.Datacad}</td>
          <td>{props.DataSaida}</td>
          <td><button className='btn btn-warning' type='button' onClick={this.removeUsuario}>Alterar</button></td>
          <td><button className='btn btn-danger' type='button' onClick={this.removeUsuario}>Deletar</button></td>
        </tr>
      </tbody>
    )
  }

  componentWillMount() {
    this.getUsers();
  }

  getUsers = () => {
    fetch('http://localhost:4000/usuarios')
      .then(response => response.json())
      .then(response => this.setState({ usuarios_cadastrados: response.data }))
      .catch(error => console.error(error))
  }

  removeUsuario = (rowid) => {
    const copiaUsuarios = [...this.state.usuarios_cadastrados];
    copiaUsuarios.splice(rowid, 1);
    this.setState({ usuarios_cadastrados: copiaUsuarios });
    console.log(rowid);
  }

  render() {

    return (
      <div>
        <Navbar />

        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12'>
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th>CPF</th>
                    <th>Nome</th>
                    <th>Senha</th>
                    <th>Logradouro</th>
                    <th>Numero</th>
                    <th>Bairro</th>
                    <th>CEP</th>
                    <th>Data Cadastro</th>
                    <th>Data Saida</th>
                    <th>Alterar</th>
                    <th>Deletar</th>
                  </tr>
                </thead>
                {this.state.usuarios_cadastrados.map(this.renderizaUsuarios)}
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}