import React, { Component } from 'react';

import Wrapper from '../components/Wrapper';

export default class Contact extends Component {
   render() {
      const text =
         'Send us a message below, or email us directly at ' +
         <a href="mailto: teamcaleb23@gmail.com">teamcaleb23@gmail.com</a> +
         '.';
      const inputs = [
         {
            className: 'names info1',
            type: 'text',
            name: 'first_name',
            placeholder: 'First Name',
            required: true,
         },
         {
            className: 'names info2',
            type: 'text',
            name: 'last_name',
            placeholder: 'Last Name',
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
      const form = {
         style: { background: 'black' },
         method: 'POST',
         action: 'assets/mail.php',
         inputs: inputs,
         textarea: 'true',
         submit: 'Submit',
      };

      return (
         <div className="main">
            <Wrapper
               wrap="style1"
               title="Contact Us"
               id="email"
               text={text}
               form={form}
            />
         </div>
      );
   }
}
