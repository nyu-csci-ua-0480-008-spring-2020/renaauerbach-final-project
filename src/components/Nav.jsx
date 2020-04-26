import React, { Component } from 'react';

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
                     <li>
                        <a href="/">Home</a>
                     </li>
                     <li>
                        <a href="/events">Events</a>
                     </li>
                     <li>
                        <a href="/memories">Memory Book</a>
                     </li>
                     <li>
                        <a href="/contact">Contact Us</a>
                     </li>
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
