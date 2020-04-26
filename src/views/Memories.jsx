import React, { Component } from 'react';
import axios from 'axios';

import Wrapper from '../components/Wrapper';
import ToggleBox from '../components/ToggleBox';
import Form from '../components/Form';
import ListMemories from '../components/ListMemories';

export default class Memories extends Component {
   constructor() {
      super();
      this.state = {
         memories: [],
      };

      this.handleChange = this.handleChange.bind(this);
   }

   componentDidMount() {
      this.getMemories();
   }

   getMemories = () => {
      axios
         .get('/api/memories')
         .then((res) => {
            if (res.data) {
               this.setState({
                  memories: res.data,
               });
            }
         })
         .catch((err) => console.log(err));
   };

   handleChange = (e) => {
      this.setState({
         ...this.state.request_data,
         [e.data.target]: e.data.value,
      });
   };

   onSubmit = () => {
      console.log(this.state.request_data); // you should be able to see your form data
   };

   render() {
      let { memories } = this.state;
      const text =
         'The impact Caleb made on everyone around him is everlasting.';
      const inputs = [
         {
            type: 'text',
            name: 'full_name',
            placeholder: 'Your Full Name (optional)',
         },
         {
            type: 'text',
            name: 'title',
            placeholder: 'Memory Title',
            required: true,
         },
      ];
      const toggleText =
         "We'd love for you to add your own memories of Caleb to our Memory Book.";

      return (
         <React.Fragment>
            <Wrapper wrap="style1" title="Memory Book" top text={text} />
            <ToggleBox action="show" text={toggleText}>
               <Form
                  style={{ background: 'black' }}
                  method={'POST'}
                  inputs={inputs}
                  textarea
                  submit={'Share'}
                  onClick={this.handleChange}
               />
            </ToggleBox>
            <ListMemories memories={memories} />
         </React.Fragment>
      );
   }
}
