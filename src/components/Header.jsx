import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header id="header" class="alt">
        <div class="logo">
          <img src="images/icon.png"></img>
          <p class="memorium">In Memory of Caleb Penn Maeir</p>
        </div>
        <a href="#menu">Menu</a>
      </header>
    );
  }
}
