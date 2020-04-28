import React, { Component } from 'react';

export default class Nav extends Component {
   constructor(props) {
      super(props);
      this.state = {};
      // this.handleClose = this.handleClose.bind(this);
   }

   // handleClose = () => {
   //    this.setState({
   //       showNav: !this.props.showNav,
   //    });
   // };

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
                     href="#"
                     target="_blank"
                     className="close"
                     onClick={this.props.toggleNav}
                  ></a>
               </React.Fragment>
            ) : null}
         </nav>
      );
   }
}
