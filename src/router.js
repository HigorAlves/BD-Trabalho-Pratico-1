import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import './index.css';

import PrivateRoute from './components/PrivateRoute';
import Home from './screens/Home';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';

//Telas Administrador
import AdmScreen from './screens/Administrador/MainScreen';
import CadastrarUsuario from './screens/Administrador/CadastroUsuarios';
import ListaUsuarios from './screens/Administrador/ListagemUsuarios';
import AlterarTipoUsuario from './screens/Administrador/AlterarTipoUsuario';
import CadastrarGrandesAreas from './screens/Administrador/GrandesAreas';
import CadastroAgenciaFomento from './screens/Administrador/AgenciaFomento';
import CadastroDepartamento from './screens/Administrador/CadastroDepartamento';
import CadastrarDocumento from './screens/Administrador/CadastrarDocumento';

export default class Route extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null
    }
  }

  componentWillMount() {
    if (localStorage.getItem('auth-token') != null) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
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
          <PrivateRoute authorized={this.state.loggedIn} exact path='/administrador' component={AdmScreen} />
          <PrivateRoute authorized={this.state.loggedIn} exact path='/cadastrarUsuarios' component={CadastrarUsuario} />
          <PrivateRoute authorized={this.state.loggedIn} exact path='/alterarusuario' component={AlterarTipoUsuario} />
          <PrivateRoute authorized={this.state.loggedIn} exact path='/cadastrargrandesareas' component={CadastrarGrandesAreas} />
          <PrivateRoute authorized={this.state.loggedIn} exact path='/cadastraragenciafomento' component={CadastroAgenciaFomento} />
          <PrivateRoute authorized={this.state.loggedIn} exact path='/cadastrardepartamento' component={CadastroDepartamento} />
          <PrivateRoute authorized={this.state.loggedIn} exact path='/cadastrarDocumento' component={CadastrarDocumento} />
          <PrivateRoute authorized={this.state.loggedIn} exact path='/listarusuarios' component={ListaUsuarios} />
        </div>
      </Router>
    )
  }
}

