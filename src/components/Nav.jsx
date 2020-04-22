import React, { Component } from 'react';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';

export default class Nav extends Component {
   constructor(props) {
      super(props);
      this.state = {
         showNav: this.props.showNav,
      };
      this.handleClose = this.handleClose.bind(this);
   }

   handleClose = () => {
      this.setState({
         showNav: false,
      });
   };

   render() {
      const navClass = this.props.showNav ? 'visible' : 'close';
      return (
         <nav id="menu" className={navClass}>
            {this.props.showNav ? (
               <React.Fragment>
                  <ul className="links">
                     <Router>
                        <li>
                           <NavLink to="/">Home</NavLink>
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
                     </Router>
                  </ul>
                  <a
                     href="#menu"
                     className="close"
                     onClick={this.handleClose}
                  ></a>
               </React.Fragment>
            ) : null}
         </nav>
      );
   }
}
