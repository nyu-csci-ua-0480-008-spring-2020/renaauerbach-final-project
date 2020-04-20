import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

export default class Nav extends Component {
   render() {
      const navClass = this.props.showNav ? 'visible' : 'close';
      return (
         <nav id="menu" className={navClass}>
            {this.props.showNav ? (
               <ul className="links">
                  <Router>
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
                     <li>
                        <Link to="/account">My Account</Link>
                     </li>
                     <li>
                        <Link to="/join">Sign Up</Link>
                     </li>
                  </Router>
               </ul>
            ) : null}
         </nav>
      );
   }
}
