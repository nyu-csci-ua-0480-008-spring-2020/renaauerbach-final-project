import React, { Component } from 'react';

import Wrapper from '../components/Wrapper';

export default class Contact extends Component {
   render() {
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
            name: 'location',
            placeholder: 'City, State',
         },
         {
            type: 'password',
            name: 'password',
            placeholder: 'Password',
            required: true,
         },
      ];
      const form = {
         style: { background: 'black' },
         method: 'POST',
         action: '',
         inputs: inputs,
      };

      return (
         <div className="main">
            <Wrapper wrap="style1" title="Join Team Caleb!" form={form} />
         </div>
      );
   }
}
