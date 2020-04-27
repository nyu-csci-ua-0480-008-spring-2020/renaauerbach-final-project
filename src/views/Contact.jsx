import React, { Component } from 'react';
import axios from 'axios';

import Wrapper from '../components/Wrapper';
import Form from '../components/Form';

export default class Contact extends Component {
   constructor() {
      super();
      this.state = {
         sent: false,
         name: '',
         email: '',
         subject: '',
         text: '',
         createdAt: {},
      };

      this.onSubmit = this.onSubmit.bind(this);
   }

   onSubmit(e) {
      e.preventDefault();

      const msg = {
         name: this.state.name,
         email: this.state.email,
         subject: this.state.subject,
         text: this.state.text,
         createdAt: new Date(),
      };

      this.setState({
         sent: !this.state.sent,
      });

      axios
         .post('http://localhost:3001/api/contact', msg)
         .then((res) => {
            this.props.history.push('/');
            console.log(res.data);
         })
         .catch((err) => {
            console.log('Error in Memories:', err);
         });

      this.setState({
         sent: !this.state.sent,
         name: '',
         email: '',
         subject: '',
         text: '',
         createdAt: {},
      });
   }

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
                     action=""
                     inputs={inputs}
                     textarea
                     submit={'Send'}
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
