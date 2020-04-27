import React, { Component } from 'react';
import axios from 'axios';

import ColumnWrapper from '../components/ColumnWrapper';

export default class ListEvents extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         email: '',
      };

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
   }

   onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
   }

   onSubmit(e) {
      e.preventDefault();

      const user = {
         name: this.state.name,
         email: this.state.email,
      };

      axios
         .post('http://localhost:3001/api/events', user)
         .then((res) => {
            this.props.history.push('/');
            console.log(res.data);
         })
         .catch((err) => {
            console.log('Error in ListEvents:', err);
         });

      this.setState({
         name: '',
         email: '',
      });
   }

   render() {
      const form = {
         inputs: [
            {
               type: 'text',
               name: 'name',
               placeholder: 'Your Full Name',
               value: this.state.name,
               required: true,
            },
            {
               type: 'email',
               name: 'email',
               placeholder: 'Your Email',
               value: this.state.title,
               required: true,
            },
         ],
         submit: 'Submit',
         onSubmit: this.onSubmit,
         onChange: this.onChange,
      };

      let events = this.props.events;
      return events.length > 0 ? (
         events.map((event, index) => {
            console.log(event);
            const columns = [
               {
                  class: 'align-center',
                  img: {
                     src: event.image,
                     alt: 'Image of NYC Marathon',
                  },
                  title: event.title,
                  text: event.text,
                  span: [
                     {
                        details: 'Where: ' + event.location,
                     },
                     { details: 'When: ' + event.date },
                  ],
                  toggle: true,
                  toggleButton: 'Register',
               },
            ];
            let flexClass = events.length > 1 ? 'flex-' + events.length : null;
            return (
               <ColumnWrapper
                  flexClass={flexClass}
                  columns={columns}
                  form={form}
               />
            );
         })
      ) : (
         <div className="missing-block">
            <p className="no-data-msg">
               We don't have any events planned at the momemt, but we will let
               you know when we do!
            </p>
         </div>
      );
   }
}
