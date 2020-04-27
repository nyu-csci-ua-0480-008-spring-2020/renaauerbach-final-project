import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import routes from './server/routes';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showNav: false,
		};
		this.toggleNav = this.toggleNav.bind(this);
	}

	toggleNav() {
		this.setState({ showNav: !this.state.showNav });
	}

	render() {
		library.add(fab);
		let { showNav } = this.state;
		return (
			<React.Fragment>
				<Header toggleNav={this.toggleNav} />
				<Nav showNav={showNav} toggleNav={this.toggleNav} />
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
				{this.props.component}
				<Footer />
			</React.Fragment>
		);
	}
}
