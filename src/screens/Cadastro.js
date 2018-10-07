import React, { Component } from 'react';

export default class Cadastro extends Component {
  render() {
    return (
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <div className="w-400 mw-100 p-6 telaCentralizada backgroundSeparador">
                <h5 className="mb-7 py-3">Faça login com sua conta</h5>

                <form>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Email</label>
                      <input type="email" class="form-control" id="inputEmail4" placeholder="Email" required />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputPassword4">Senha</label>
                      <input type="password" class="form-control" id="inputPassword4" placeholder="Senha" required />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputNome">Nome</label>
                      <input type="email" class="form-control" id="inputNome" placeholder="Nome" required />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputSobrenome">Sobrenome</label>
                      <input type="password" class="form-control" id="inputSobreNome" placeholder="Sobrenome" required />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputAddress">Endereço</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Rua helder valerio 123" required />
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputCity">Cidade</label>
                      <input type="text" class="form-control" id="inputCity" required />
                    </div>
                    <div class="form-group col-md-4">
                      <label for="inputState">State</label>
                      <select id="inputState" class="form-control">
                        <option selected>Escolha</option>
                        <option>Acré</option>
                        <option>Alagoas</option>
                        <option>Amapá</option>
                        <option>Amazonas</option>
                        <option>Bahia</option>
                        <option>Ceará</option>
                        <option>Distrito Federal</option>
                        <option>Espírito Santo</option>
                        <option>Goiás</option>
                        <option>Maranhão</option>
                        <option>Mato Grosso</option>
                        <option>Mato Grosso do Sul</option>
                        <option>Minas Gerais</option>
                        <option>Pará</option>
                        <option>Paraiba</option>
                        <option>Paraná</option>
                        <option>Pernambuco</option>
                        <option>Piauí</option>
                        <option>Rio de Janeiro</option>
                        <option>Rio Grande do Norte</option>
                        <option>Rio Grande do Sul</option>
                        <option>Rondônia</option>
                        <option>Roraima</option>
                        <option>Santa Catarina</option>
                        <option>São Paulo</option>
                        <option>Sergipe</option>
                        <option>Tocatins</option>
                      </select>
                    </div>
                    <div class="form-group col-md-2">
                      <label for="inputZip">CEP</label>
                      <input type="text" class="form-control" id="inputZip" />
                    </div>
                  </div>
                  <button type="submit" class="btn btn-success">Cadastrar</button>
                </form>

              </div>

            </div>
          </div>
        </div>
      </section>
    )
  }
}