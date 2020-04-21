import React, { Component } from 'react';
import axios from 'axios';

import Wrapper from '../components/Wrapper';

export default class Register extends Component {
   constructor() {
      super(props);
      this.state = {
         events: [],
      };
   }

   registerUser = () => {
      const task = { action: this.state.action };

      if (task.action && task.action.length > 0) {
         axios
            .post('/api/events', task)
            .then((res) => {
               if (res.data) {
                  this.props.getTodos();
                  this.setState({ action: '' });
               }
            })
            .catch((err) => console.log(err));
      } else {
         console.log('input field required');
      }
   };

   handleChange = (e) => {
      this.setState({
         action: e.target.value,
      });
   };

   render() {
      const text = 'Join us at one of our upcoming events!';

      return (
         <Wrapper
            wrap="style1"
            title="Upcoming Events"
            text={text}
            form={form}
         />
      );
   }
}
