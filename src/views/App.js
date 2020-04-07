import React, { Component } from 'react';
import axios from 'axios';

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Home from './Home';

import logo from '../assets/img/icon.png';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: null,
			intervalIsSet: false,
			idToDelete: null,
			idToUpdate: null,
			objectToUpdate: null,
		};
	}

	componentDidMount() {
		fetch('/users')
			.then(res => res.json())
			.then(users => this.setState({ users }));
	}

	render() {
		return (
			<div>
				<header id="header">
					<div className="logo">
						<img src={logo} alt="logo" />
						<p className="memorium">In Memory of Caleb Penn Maeir</p>
					</div>
					<a href="#menu"></a>
					<nav id="menu">
						<Nav {...this.props} />
					</nav>
				</header>
				<Home />
				<Footer />
				{/* <h1>Users</h1> */}
				{/* {this.state.users.map(user => ( */}
				{/* 	<div key={user.id}>{user.username}</div> */}
				{/* ))} */}
			</div>
		);
	}
}
