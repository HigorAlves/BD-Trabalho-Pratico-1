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
						data-target="#navbarTogglerDemo01"
						aria-controls="navbarTogglerDemo01"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
				</nav>

				<div className="collapsing navbar-collapse navbar-nav mr-auto mt-2 mt-lg-0" id="navbarTogglerDemo01">
					<h5>10.658</h5>
					<span>Recursos disponiveis</span>
					<br />
					<div className="input-group p-3">
						<input type="text" className="form-control" placeholder="Pesquisar artigos disponiveis" aria-label="Recipient's username" aria-describedby="button-addon2" />
						<div className="input-group-append">
							<button className="btn btn-outline-secondary" type="button" id="button-addon2"><SEARCH /> Pesquisar</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
