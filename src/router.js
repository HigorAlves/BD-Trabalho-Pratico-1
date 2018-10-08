import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Redirect } from 'react-router-dom'

import './index.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import TelaADM from './screens/TelaADM';
import PrivateRoute from './components/PrivateRoute';

export default class Route extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null
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
          <PrivateRoute ivateRoute authorized={this.state.loggedIn} exact path='/administrador' component={TelaADM} />
        </div>
      </Router>
    )
  }
}

