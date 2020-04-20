import React, { Component } from 'react';

import Wrapper from '../components/Wrapper';

export default class Events extends Component {
   // constructor() {
   //    super(props);
   //    this.state = [];
   // }

   render() {
      const text = 'Events';

      return (
         <div className="main">
            <Wrapper wrap="style1" title="Contact Us" id="email" text={text} />
         </div>
      );
   }
}
