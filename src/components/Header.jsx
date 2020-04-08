import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/icon.png';

export default class Header extends Component {
   render() {
      return (
         <header id="header">
            <div className="logo">
               <img src={logo} alt="logo" />
               <p className="memorium">In Memory of Caleb Penn Maeir</p>
            </div>
            <a href="#menu">Menu</a>
         </header>
      );
   }
}
