//Bootstrap Imports
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Router from './router';
import './index.css';
import App from './App';
import Home from './screens/Home';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import TelaADM from './screens/TelaADM';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
// <Router>
    //     <div>
    //         {let loggedIn = localstorge.getItem('auth-token')}
    //         <Route exact path="/" render={() => { if (!loggedIn) return <Login />; return <Redirect to={{ pathname: '/' }} />; }} />
    //         <Route exact path='/' component={Home} />
    //         <Route exact path='/login' component={Login} />
    //         <Route exact path='/cadastrar' component={Cadastro} />
    //         <Route exact path='/administrador' component={TelaADM} />
    //     </div>
    // </Router>