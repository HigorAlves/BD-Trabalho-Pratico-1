import React, { Component } from 'react';
import '../assets/css/loginPage.css';
import Navbar from '../components/Navbar';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin() {
    let token = 'estalogado';
    localStorage.setItem('auth-token', token);
  }

  render() {
    return (
      <section>
        <Navbar />
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <div className="w-400 mw-100 p-6 telaCentralizada backgroundSeparador">
                <h5 className="mb-7 py-3">Faça login com sua conta</h5>
                <form onSubmit={this.handleLogin}>
                  <div className="form-group">
                    <input type="text" className="form-control" name="Usuario" placeholder="Usuario" />
                  </div>

                  <div className="form-group">
                    <input type="password" className="form-control" name="Senha" placeholder="Senha" />
                  </div>

                  <a className="text-muted" href="">Esqueceu a senha?</a>

                  <div className="form-group">
                    <button className="btn btn-block btn-success" type="submit">Login</button>
                  </div>
                </form>

                <p className="text-center text-muted small-2">Não tem uma conta? <a href="">Registre-se aqui</a></p>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}