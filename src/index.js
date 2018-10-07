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

ReactDOM.render(
  <Router>
    <Route path='/' component={App} />
  </Router>

  , document.getElementById('root'));
registerServiceWorker();
