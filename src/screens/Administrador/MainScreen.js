import React, { Component } from 'react';
import Navbar from '../../components/NavBarAdm';
import { USERS } from '../../lib/fontAwesome';
import { Link } from 'react-router-dom';


export default class MainScreen extends Component {
  render() {
    return (
      <section>
        <Navbar />
        <div className={'container header'}>
          <div className={'row centralizado'}>
            <div className="col-lg-9 col-md-7 col-sm-5">
              <div class="alert alert-primary" role="alert">
                Bem vindo Administrador!
							</div>

              <section>
                <h4>Area de Cadastramento</h4>
                <hr />
                <div className='container'>
                  <div className='row'>
                    <div className='col-4'>
                      <USERS />
                      <br />
                      <Link to={'/cadastrarusuarios'}>Cadastrar Usuario</Link>
                    </div>
                    <div className='col-md-4'>
                      <USERS />
                      <br />
                      <Link to={'/alterarusuario'}>Alterar Tipo Usuario</Link>
                    </div>
                    <div className='col-md-4'>
                      <USERS />
                      <Link to={'/cadastrarGrandesAreas'}>Cadastrar Grandes Areas</Link>
                    </div>
                    <div className='col-md-4'>
                      <USERS />
                      <p>Cadastrar Agencia Fomento</p>
                    </div>
                    <div className='col-md-4'>
                      <USERS />
                      <p>Cadastrar Tipos de publicação</p>
                    </div>
                    <div className='col-md-4'>
                      <USERS />
                      <p>Cadastrar Documento</p>
                    </div>
                    <div className='col-md-4'>
                      <USERS />
                      <p>Cadastrar Publicação</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h4>Consultas</h4>
                <hr />
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-4'>
                      <USERS />
                      <Link to={'/listarusuarios'}>Listar Usuarios</Link>
                    </div>
                  </div>
                </div>
              </section>

            </div>

            {/*Sidebar com as opões escolhidas*/}
            <div className={'col-lg-3 col-md-3 col-sm-3 d-none d-sm-none d-lg-block'}>
              <h5>Comunicados</h5>
              <hr />
            </div>
          </div>
        </div>
      </section>
    )
  }
}