import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import routes from './server/routes/routes';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

import setAuthToken from './server/utils/setAuthToken';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showNav: false,
			// message: null,
			// intervalIsSet: false,
			// idToDelete: null,
			// idToUpdate: null,
			// objectToUpdate: null,
		};
		this.toggleNav = this.toggleNav.bind(this);
	}

	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/home');
		}
	}

	toggleNav() {
		this.setState({ showNav: !this.state.showNav });
	}

	render() {
		return (
			<React.Fragment>
				<Header toggleNav={this.toggleNav} />
				<Nav showNav={this.state.showNav} toggleNav={this.toggleNav} />
				<Router>
					<Switch>
						{routes.map((route, index) => (
							<Route
								key={index}
								path={route.path}
								exact={route.exact}
								children={<route.main />}
							/>
						))}
					</Switch>
				</Router>
				,{this.props.component}
				<Footer />
				{/* <h1>Users</h1> */}
				{/* {this.state.users.map(user => ( */}
				{/* 	<div key={user.id}>{user.username}</div> */}
				{/* ))} */}
			</React.Fragment>
		);
	}
}
