import React, { Component } from 'react';
import axios from 'axios';

import ColumnWrapper from '../components/ColumnWrapper';

export default class ListEvents extends Component {
   constructor(props) {
      super(props);
      this.state = {
         events: this.props.events,
         name: '',
         email: '',
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(e) {
      this.setState({ [e.target.name]: e.target.value });
   }

   handleSubmit(id) {
      const user = {
         name: this.state.name,
         email: this.state.email,
      };

      axios
         .post(`http://localhost:3001/api/events/${id}/register`, user)
         .then(res => {
            this.setState({
               name: '',
               email: '',
            });
            console.log(res.data);
         })
         .catch(err => {
            console.log('Error in ListEvents:', err);
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
         method: 'PUT',
         onChange: this.handleChange,
      };

      let events = this.props.events;
      return events.length > 0 ? (
         events.map((event, index) => {
            let date = new Date(event.date)
               .toDateString()
               .split(' ')
               .slice(1)
               .join(' ');
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
                     { details: 'When: ' + date },
                  ],
                  toggle: true,
                  toggleButton: 'Register',
               },
            ];
            let flexClass = events.length > 1 ? 'flex-' + events.length : null;

            return (
               <div className={'flex ' + flexClass} key={event._id}>
                  <ColumnWrapper
                     event={event}
                     columns={columns}
                     form={form}
                     handleSubmit={this.handleSubmit}
                  />
               </div>
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
