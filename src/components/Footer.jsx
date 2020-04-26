import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Header extends Component {
   render() {
      return (
         <footer>
            <div className="copyright">
               <ul className="icons">
                  <li>
                     <a
                        href="https://www.facebook.com/TeamCalebMaeir/"
                        className="icon"
                     >
                        <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" />
                     </a>
                  </li>
                  <li>
                     <a href="https://www.instagram.com/team__caleb/">
                        <FontAwesomeIcon
                           icon={['fab', 'instagram']}
                           size="2x"
                        />
                     </a>
                  </li>
                  {/* <li> */}
                  {/*    <a href=""> */}
                  {/*       <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" /> */}
                  {/*    </a> */}
                  {/* </li> */}
                  {/* <li> */}
                  {/*    <a href=""> */}
                  {/*       <FontAwesomeIcon icon={['fab', 'snapchat']} size="2x" /> */}
                  {/*    </a> */}
                  {/* </li> */}
               </ul>
               <p id="copy">
                  Copyright &copy; {new Date().getFullYear()} Team Caleb. All
                  rights reserved.
               </p>
            </div>
         </footer>
      );
   }
}
