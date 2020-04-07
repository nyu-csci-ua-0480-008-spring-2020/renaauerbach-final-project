import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import routes from '../server/routes/routes';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/memories">Memory Book</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          {/* <li> */}
          {/*   <Link to="/account">My Account</Link> */}
          {/* </li> */}
          {/* <li> */}
          {/*   <Link to="/signup">Sign Up</Link> */}
          {/* </li> */}
        </ul>

        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    );
  }
}
