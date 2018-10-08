import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../assets/css/navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props)
  }
  handleDeslogar = () => {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('nome');
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link class="navbar-brand" to={'/administrador'}>Ferramentas do Administrador</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link" to={'/administrador'}>Inicio</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={'/'}>Artigos</Link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Funções
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Não inserida</a>
                  <a class="dropdown-item" href="#">Não inserida</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Não inserida</a>
                </div>
              </li>
            </ul>
            <button className='btn btn-danger' onClick={this.handleDeslogar} >Deslogar do Sistema</button>
          </div>
        </nav>

        <section
          className="collapsing navbar-collapse navbar-nav mr-auto mt-2 mt-lg-0 d-lg-none d-xl-none"
          id="navbarToggler"
        >

        </section>
      </div>
    );
  }
}

export default withRouter(Navbar);