//Bootstrap Imports
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css';
import App from './App';
import Home from './screens/Home';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import TelaADM from './screens/TelaADM';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/cadastrar' component={Cadastro} />
      <Route exact path='/administrador' component={TelaADM} />
    </div>
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
