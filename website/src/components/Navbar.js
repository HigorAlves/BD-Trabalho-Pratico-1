import React, { Component } from 'react';
import '../assets/css/navbar.css';
import { SEARCH } from '../lib/fontAwesome';

export default class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark navbar-primary">
					<a className="navbar-brand" href="">
						Trabalho Pratico
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

				<section className="collapsing navbar-collapse navbar-nav mr-auto mt-2 mt-lg-0" id="navbarToggler">
					<h5>10.658</h5>
					<span>Recursos disponiveis</span>
					<div className="input-group p-3">
						<input type="text" className="form-control" placeholder="Pesquisar artigos disponiveis" aria-label="Recipient's username" aria-describedby="button-addon2" />
						<div className="input-group-append">
							<button className="btn btn-outline-secondary" type="button" id="button-addon2"><SEARCH /> Pesquisar</button>
						</div>
					</div>

					<section>
						<div className="container-fluid">
							<div className="row">
								<div className="mx-auto p-3">
									<div className="tableHeader">
										<p>Visualizar por categoria</p>
									</div>
								</div>
							</div>

						</div>
					</section>

				</section>
			</div>
		);
	}
}
