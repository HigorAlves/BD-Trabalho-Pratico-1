import React, { Component } from 'react';
import '../assets/css/navbar.css';
import { SEARCH } from '../lib/fontAwesome';
import Sidebar from './Sidebar';

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
					<Sidebar />
				</section>
			</div>
		);
	}
}
