import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import routes from './server/routes/routes';

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
				{this.props.component === 'Home' ? <Banner /> : null}
				<div className="main">{this.props.component}</div>
				<Footer />
			</React.Fragment>
		);
	}
}
