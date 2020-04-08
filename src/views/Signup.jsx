import React, { Component } from 'react';

import Wrapper from '../components/Wrapper';

// function createUser() {
//    fetch('http://localhost:3001/api/person', {
//       method: 'post',
//       body: JSON.stringify([
//          {
//             email: this.state.email,
//             firstName: this.state.firstName,
//             lastName: this.state.lastName,
//          },
//       ]),
//       headers: {
//          'Content-Type': 'application/json',
//          Origin: 'http://localhost:3001',
//       },
//    })
//       .then((res) => res.json())
//       .then((status) => {
//          if (status.success === false) {
//             console.log('MISSION FAILED');
//             console.log(status.error);
//          } else {
//             console.log('MISSION SUCCESS');
//             this.setState({ personID: status.id });
//          }
//       });
// }

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
