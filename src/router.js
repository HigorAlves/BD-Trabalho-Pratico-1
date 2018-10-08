import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import './index.css';

import PrivateRoute from './components/PrivateRoute';
import Home from './screens/Home';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import TelaADM from './screens/TelaADM';
import ListagemUsuarios from './screens/ListagemUsuarios';

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
          <PrivateRoute authorized={this.state.loggedIn} exact path='/administrador' component={TelaADM} />
          <PrivateRoute authorized={this.state.loggedIn} exact path='/allusers' component={ListagemUsuarios} />
        </div>
      </Router>
    )
  }
}

