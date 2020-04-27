import React, { Component } from 'react';

import Wrapper from '../components/Wrapper';
import Form from '../components/Form';

export default class Contact extends Component {
   constructor() {
      super();
      this.state = {
         sent: false,
      };

      this.onSubmit = this.onSubmit.bind(this);
   }

   onSubmit = () => {
      this.setState({
         sent: !this.state.sent,
      });
   };

   render() {
      const text = 'Send us a message below, or email us directly at ';
      const addedElement = (
         <a href="mailto: teamcaleb23@gmail.com">teamcaleb23@gmail.com</a>
      );
      const inputs = [
         {
            type: 'text',
            name: 'name',
            placeholder: 'Your Full Name',
            required: true,
         },
         {
            type: 'email',
            name: 'email',
            placeholder: 'Example@teamcaleb.org',
            required: true,
         },
         {
            type: 'text',
            name: 'subject',
            placeholder: 'Subject',
            required: true,
         },
      ];

      return (
         <div className="main">
            <Wrapper
               wrap="style1"
               title="Contact Us"
               id="email"
               top
               text={text}
               addedElement={addedElement}
            />
            {!this.state.sent ? (
               <React.Fragment>
                  <Form
                     style={{ background: 'black' }}
                     method={'POST'}
                     action="mailto: teamcaleb23@gmail.com"
                     inputs={inputs}
                     textarea
                     textPlaceholer={'Your Message'}
                     submit={'Submit'}
                     onClick={this.onSubmit}
                  />
                  <p className="push">
                     *You can expect a response within 24 - 48 hours
                  </p>
               </React.Fragment>
            ) : (
               <p className="no-data-msg">
                  You're message has been sent! Thank you!
               </p>
            )}
         </div>
      );
   }
}
