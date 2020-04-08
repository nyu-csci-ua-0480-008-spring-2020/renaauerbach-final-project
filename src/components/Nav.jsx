import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

export default class Sidebar extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      return (
         <nav id="menu">
            <ul className="links">
               <Router>
                  <li>
                     <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                     <NavLink to="/news">News</NavLink>
                  </li>
                  <li>
                     <NavLink to="/events">Events</NavLink>
                  </li>
                  <li>
                     <NavLink to="/memories">Memory Book</NavLink>
                  </li>
                  <li>
                     <NavLink to="/contact">Contact Us</NavLink>
                  </li>
                  <li>
                     <NavLink to="/account">My Account</NavLink>
                  </li>
                  <li>
                     <NavLink to="/join">Sign Up</NavLink>
                  </li>
               </Router>
            </ul>
         </nav>
      );
   }
}
