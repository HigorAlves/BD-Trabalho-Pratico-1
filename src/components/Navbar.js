import React, { Component } from 'react';
import '../assets/css/navbar.css';
import { SEARCH } from '../lib/fontAwesome';

export default class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark navbar-primary">
					<a className="navbar-brand" href="">
						Acervo de Recursos Educacionais
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarToggler"
						aria-controls="navbarToggler"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
				</nav>

				<section
					className="collapsing navbar-collapse navbar-nav mr-auto mt-2 mt-lg-0 d-lg-none d-xl-none"
					id="navbarToggler"
				>
					<h5 className="semMargin">10.658</h5>
					<span>Recursos disponiveis</span>
					<div className="input-group p-4">
						<input
							type="text"
							className="form-control"
							placeholder="Pesquisar artigos"
							aria-label="Recipient's username"
							aria-describedby="button-addon2"
						/>
						<div className="input-group-append">
							<button
								className="btn btn-outline-secondary"
								type="button"
								id="button-addon2"
							>
								<SEARCH /> Pesquisar
							</button>
						</div>
					</div>

					<section>
						<div className="container-fluid">
							<div className="row">
								<table className="table table-bordered table-hover table-sm">
									<thead>
										<tr>
											<th>Visualizar por categorias</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<span>Exemplo</span>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</section>

					<section>
						<div className="container-fluid">
							<div className="row">
								<table className="table table-bordered table-hover table-sm">
									<thead>
										<tr>
											<th colSpan="2" align="justify">
												Minha Conta
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<span>Logar</span>
											</td>
											<td>
												<span>Criar Conta</span>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</section>
				</section>
			</div>
		);
	}
}
