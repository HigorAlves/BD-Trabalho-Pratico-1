import React, { Component } from 'react';
import '../assets/css/table.css';
import { SEARCH } from '../lib/fontAwesome';

export default class Sidebar extends Component {
	render() {
		return (
			<div>
				<section>
					<h5 className="centralizado">10.658</h5>
					<span className="centralizado">Recursos disponiveis</span>
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
								<SEARCH />
							</button>
						</div>
					</div>
				</section>
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

			</div >
		);
	}
}
