import React, { Component } from 'react';

import Wrapper from '../components/Wrapper';

export default class Contact extends Component {
   constructor(props) {
      super(props);
      this.state = {
         firstName: '',
         lastName: '',
         email: '',
         location: '',
         password: '',
         errors: {},
      };

      this.sendData = this.sendData.bind(this);
   }

   componentDidMount() {
      if (this.props.auth.isAuthenticated) {
         this.props.history.push('/home');
      }
   }

   componentWillReceiveProps(nextProps) {
      if (nextProps.errors) {
         this.setState({ errors: nextProps.errors });
      }
   }

   onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
   };

   onSubmit = (e) => {
      e.preventDefault();

      const newUser = {
         name: this.state.name,
         email: this.state.email,
         password: this.state.password,
         password2: this.state.password2,
      };

      this.props.registerUser(newUser, this.props.history);
   };

   async sendData() {
      fetch('/api/user/', {
         method: 'post',
         body: JSON.stringify({
            title: this.title,
         }),
         headers: {
            'Content-Type': 'application/json',
         },
      })
         .then((res) => res.json())
         .then((status) => {
            if (status.success === false) {
               //show failure page
            } else {
               fetch('/api/person', {
                  method: 'post',
                  body: JSON.stringify([
                     {
                        phoneNum: this.phoneNum,
                        firstName: this.firstName,
                        lastName: this.lastName,
                     },
                     {
                        id: status.id,
                     },
                  ]),
                  headers: {
                     'Content-Type': 'application/json',
                  },
               })
                  .then((res) => res.json())
                  .then((status) => {
                     if (status.success === false) {
                        //show failure page
                     } else {
                        //show success page
                     }
                  });
            }
         });
   }

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
