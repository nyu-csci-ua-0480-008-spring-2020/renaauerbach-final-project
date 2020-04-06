import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <nav id="menu">
        <ul class="links">
          <li>
            <a href="index.html" class="selected">
              Home
            </a>
          </li>
          <li>
            <a href="events.html">Events</a>
          </li>

          {/* <li><a href="donate.html">Donate</a></li> */}

          <li>
            <a href="contact.html">Contact Us</a>
          </li>
        </ul>
      </nav>
    );
  }
}
