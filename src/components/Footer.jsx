import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <footer id="footer">
        <div class="copyright">
          <ul class="icons">
            <li>
              <a
                href="https://www.facebook.com/TeamCalebMaeir/"
                class="icon fa-facebook"
              >
                <span class="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/team__caleb/"
                class="icon fa-instagram"
              >
                <span class="label">Instagram</span>
              </a>
            </li>

            {/* <li> */}
            {/*   <a href="#" class="icon fa-twitter" */}
            {/*     ><span class="label">Twitter</span></a */}
            {/*   > */}
            {/* </li> */}
            {/* <li> */}
            {/*   <a href="#" class="icon fa-snapchat" */}
            {/*     ><span class="label">Snapchat</span></a */}
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
