import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

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
			.then((res) => res.json())
			.then((users) => this.setState({ users: users, ...this.state }));
	}

	render() {
		return (
			<React.Fragment>
				<Header />
				<Nav {...this.props} />
				{this.props.view}
				<Footer />
				{/* <h1>Users</h1> */}
				{/* {this.state.users.map(user => ( */}
				{/* 	<div key={user.id}>{user.username}</div> */}
				{/* ))} */}
			</React.Fragment>
		);
	}
}