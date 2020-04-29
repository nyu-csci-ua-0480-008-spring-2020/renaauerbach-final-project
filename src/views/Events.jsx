import React, { Component } from 'react';
import axios from 'axios';

import Wrapper from '../components/Wrapper';
import ListEvents from '../components/ListEvents';

export default class Events extends Component {
   constructor(props) {
      super(props);
      this.state = {
         events: [],
         name: '',
         email: '',
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   componentDidMount() {
      axios
         .get('http://localhost:3001/api/events')
         .then(res => {
            this.setState({ events: res.data });
            console.log('Events: ', res.data);
         })
         .catch(function(err) {
            console.log(err);
         });
   }

   handleChange(e) {
      this.setState({ [e.target.name]: e.target.value });
   }

   handleSubmit(id) {
      console.log('id', id);
      const user = {
         name: this.state.name,
         email: this.state.email,
      };

      axios
         .post(`http://localhost:3001/api/events/${id}/register`, user)
         .then(res => {
            console.log(res.data);
         })
         .catch(err => {
            console.log('Error in Events:', err);
         });

      this.setState({
         name: '',
         email: '',
      });
   }

   render() {
      let { events } = this.state;
      const text = 'Join us at one of our upcoming events!';

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
         submit: 'Submit',
         onSubmit: this.handleSubmit,
         onChange: this.handleChange,
      };

      return (
         <div className="main">
            <Wrapper
               wrap="style1"
               title="Upcoming Events"
               id="email"
               top
               text={text}
            />
            <ListEvents events={events} form={form} />
         </div>
      );
   }
}
