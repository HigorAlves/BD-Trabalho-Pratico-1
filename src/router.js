import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import './index.css';

import PrivateRoute from './components/PrivateRoute';
import Home from './screens/Home';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import AlterandousuarioDados from './screens/AlterandoUsuarioDados';

//Telas Administrador
import AdmScreen from './screens/Administrador/MainScreen';
import CadastrarUsuario from './screens/Administrador/CadastroUsuarios';
import ListaUsuarios from './screens/Administrador/ListagemUsuarios';
import AlterarTipoUsuario from './screens/Administrador/AlterarTipoUsuario';
import CadastrarGrandesAreas from './screens/Administrador/GrandesAreas';
import CadastroAgenciaFomento from './screens/Administrador/AgenciaFomento';
import CadastroDepartamento from './screens/Administrador/CadastroDepartamento';
import CadastrarDocumento from './screens/Administrador/CadastrarDocumento';
import CadastroPublicacoes from './screens/Administrador/CadastroPublicacoes';
import CadastrarRecursosFinanceiros from './screens/Administrador/CadastrarRecursosFinanceiros';

export default class Route extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInAdministrador: null
    }
  }

  componentWillMount() {
    if (localStorage.getItem('auth-token') === 'estalogado') {
      this.setState({ loggedInAdministrador: true });
    } else {
      this.setState({ loggedInAdministrador: false });
    }
  }

  render() {
    return (
      <Router>
        <div>
          <PrivateRoute exact path='/' render={() => { if (!this.state.loggedIn) return <Home />; return <Redirect to={{ pathname: '/' }} />; }} />
          <PrivateRoute authorized={true} exact path='/' component={Home} />
          <PrivateRoute authorized={true} exact path='/login' component={Login} />
          <PrivateRoute authorized={true} exact path='/cadastrar' component={Cadastro} />

          {/* //Telas somente do Administrador */}
          <PrivateRoute authorized={this.state.loggedInAdministrador} exact path='/administrador' component={AdmScreen} />
          <PrivateRoute authorized={this.state.loggedInAdministrador} exact path='/cadastrarusuarios' component={CadastrarUsuario} />
          <PrivateRoute authorized={this.state.loggedInAdministrador} exact path='/alterarusuario' component={AlterarTipoUsuario} />
          <PrivateRoute authorized={this.state.loggedInAdministrador} exact path='/cadastrargrandesareas' component={CadastrarGrandesAreas} />
          <PrivateRoute authorized={this.state.loggedInAdministrador} exact path='/cadastraragenciafomento' component={CadastroAgenciaFomento} />
          <PrivateRoute authorized={this.state.loggedInAdministrador} exact path='/cadastrardepartamento' component={CadastroDepartamento} />
          <PrivateRoute authorized={this.state.loggedInAdministrador} exact path='/cadastrarDocumento' component={CadastrarDocumento} />
          <PrivateRoute authorized={this.state.loggedInAdministrador} exact path='/cadastrarpublicacao' component={CadastroPublicacoes} />
          <PrivateRoute authorized={this.state.loggedInAdministrador} exact path='/cadastrarrecursosfinanceiros' component={CadastrarRecursosFinanceiros} />
          <PrivateRoute authorized={this.state.loggedInAdministrador} exact path='/listarusuarios' component={ListaUsuarios} />
          <PrivateRoute authorized={this.state.loggedInAdministrador} exact path='/alterardadosusuario' component={AlterandousuarioDados} />
        </div>
      </Router>
    )
  }
}

