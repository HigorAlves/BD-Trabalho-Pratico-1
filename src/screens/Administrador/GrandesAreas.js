import React, { Component } from 'react';
import Navbar from '../../components/NavBarAdm';

export default class GrandesAreas extends Component {
	render() {
		return (
			<section>
				<Navbar />

				<div className='container'>
					<div className='row'>
						<div className='col-6'>
							<h4>Grande Area</h4>
							<hr />
							<form>
								<div class="form-group">
									<label for="inputIdentificador">Identificador</label>
									<select id="inputIdentificador" class="form-control">
										<option selected>Choose...</option>
										<option>...</option>
									</select>
								</div>
								<div class="form-group">
									<label for="inputNome">Nome</label>
									<input type="text" class="form-control" id="inputNome" aria-describedby="nome" placeholder="Insira o nome" />
								</div>
								<button type="submit" class="btn btn-primary my-2">Salvar</button>
							</form>
						</div>

						<div className='col-6'>
							<h4>Area</h4>
							<hr />
							<form>
								<div class="form-group">
									<label for="inputIdentificadorArea">Identificador</label>
									<select id="inputIdentificadorArea" class="form-control">
										<option selected>Choose...</option>
										<option>...</option>
									</select>
								</div>
								<div class="form-group">
									<label for="inputNomeArea">Nome</label>
									<input type="text" class="form-control" id="inputNomeArea" aria-describedby="nome" placeholder="Insira o nome" />
								</div>
								<button type="submit" class="btn btn-primary my-2">Salvar</button>
							</form>
						</div>

						<div className='col-6'>
							<h4>SubArea</h4>
							<hr />
							<form>
								<div class="form-group">
									<label for="inputIdentificadorSub">Identificador</label>
									<select id="inputIdentificadorSub" class="form-control">
										<option selected>Choose...</option>
										<option>...</option>
									</select>
								</div>
								<div class="form-group">
									<label for="inputNomeSub">Nome</label>
									<input type="text" class="form-control" id="inputNomeSub" aria-describedby="nome" placeholder="Insira o nome" />
								</div>
								<button type="submit" class="btn btn-primary my-2">Salvar</button>
							</form>
						</div>

						<div className='col-6'>
							<h4>Especialidade</h4>
							<hr />
							<form>
								<div class="form-group">
									<label for="inputIdentificadorEsp">Identificador</label>
									<select id="inputIdentificadorEsp" class="form-control">
										<option selected>Choose...</option>
										<option>...</option>
									</select>
								</div>
								<div class="form-group">
									<label for="inputNomeEsp">Nome</label>
									<input type="text" class="form-control" id="inputNomeEsp" aria-describedby="nome" placeholder="Insira o nome" />
								</div>
								<button type="submit" class="btn btn-primary my-2">Salvar</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		)
	}
}