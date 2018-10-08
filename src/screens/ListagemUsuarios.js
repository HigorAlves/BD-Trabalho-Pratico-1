import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavBarAdm';
export default class ListagemUsuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios_cadastrados: [
        { cpf_usr: '87321', nome: 'Higor Alves', senha: '*******', logradouro: 'Rua maneirassa', numero: 65, bairro: 'Biarro loco', cep: '3555000', datacad: '2018/09/12' },
        { cpf_usr: 87321, nome: 'Higor Alves', senha: '*******', logradouro: 'Rua maneirassa', numero: 65, bairro: 'Biarro loco', cep: '3555000', datacad: '2018/09/12' },
      ]
    }
    this.renderizaUsuarios = this.renderizaUsuarios.bind(this);
  }

  renderizaUsuarios = props => {
    return (
      <tbody>
        <tr>
          <td>{props.cpf_usr}</td>
          <td>{props.nome}</td>
          <td>{props.senha}</td>
          <td>{props.logradouro}</td>
          <td>{props.numero}</td>
          <td>{props.bairro}</td>
          <td>{props.cep}</td>
          <td>{props.datacad}</td>
          <td>{props.cpf_usr}</td>
        </tr>
      </tbody>
    )
  }


  render() {

    return (
      <div>
        <Navbar />

        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12'>
              <table className='table table-striped table-bordered'>
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
                  </tr>
                </thead>
                {this.state.usuarios_cadastrados.map(this.renderizaUsuarios)}
              </table>
            </div>
          </div>
        </div>
      </div >
    )
  }
}