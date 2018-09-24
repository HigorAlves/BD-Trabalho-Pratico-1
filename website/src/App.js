import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Posts from './components/Posts';

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<main>
					<Posts />
					{/* <Sidebar /> */}
				</main>
			</div>
		);
	}
}

export default App;
