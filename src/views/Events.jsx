import React, { Component } from 'react';

import Wrapper from '../components/Wrapper';

export default class Events extends Component {
   // constructor() {
   //    super(props);
   //    this.state = [];
   // }

   render() {
      const text = 'Join us at one of our upcoming events';

      return (
         <div className="main">
            <Wrapper
               wrap="style1"
               title="Upcoming Events"
               id="email"
               text={text}
            />
         </div>
      );
   }
}
