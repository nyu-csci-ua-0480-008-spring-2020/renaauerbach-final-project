import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <footer>
        <div className="copyright">
          <ul className="icons">
            <li>
              <a
                href="https://www.facebook.com/TeamCalebMaeir/"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/team__caleb/"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            {/* <li> */}
            {/*   <a href="#" className="icon fa-twitter" */}
            {/*     ><span className="label">Twitter</span></a */}
            {/*   > */}
            {/* </li> */}
            {/* <li> */}
            {/*   <a href="#" className="icon fa-snapchat" */}
            {/*     ><span className="label">Snapchat</span></a */}
            {/*   > */}
            {/* </li> */}
          </ul>
          <p id="copy">
            Copyright &copy; {new Date().getFullYear()} Team Caleb. All rights
            reserved.
          </p>
        </div>
      </footer>
    );
  }
}
