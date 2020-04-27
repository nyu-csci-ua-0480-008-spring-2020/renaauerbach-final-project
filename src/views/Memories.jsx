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
         title: '',
         author: '',
         text: '',
         createdAt: {},
      };

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
   }

   componentDidMount() {
      axios
         .get('http://localhost:3001/api/memories')
         .then((res) => {
            this.setState({ memories: res.data });
            console.log('Memories: ', res.data);
         })
         .catch((err) => {
            console.log(err);
         });
   }

   onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
   }

   onSubmit(e) {
      e.preventDefault();

      const memory = {
         title: this.state.title,
         author: this.state.author,
         text: this.state.text,
         createdAt: new Date(),
      };

      axios
         .post('http://localhost:3001/api/memories', memory)
         .then((res) => {
            this.props.history.push('/');
            console.log(res.data);
         })
         .catch((err) => {
            console.log('Error in Memories:', err);
         });

      this.setState({
         title: '',
         author: '',
         text: '',
         createdAt: {},
      });
   }

   render() {
      let { memories } = this.state;
      const text =
         'The impact Caleb made on everyone around him is everlasting.';
      const inputs = [
         {
            type: 'text',
            name: 'author',
            placeholder: 'Your Full Name (optional)',
            value: this.state.author,
         },
         {
            type: 'text',
            name: 'title',
            placeholder: 'Memory Title',
            value: this.state.title,
            required: true,
         },
      ];
      const toggleText =
         "We'd love for you to add your own memories of Caleb to our Memory Book.";

      return (
         <div className="main">
            <Wrapper wrap="style1" title="Memory Book" top text={text} />
            <ToggleBox action="show" text={toggleText}>
               <Form
                  style={{ background: 'black' }}
                  method={'POST'}
                  inputs={inputs}
                  textarea
                  submit={'Share'}
                  onClick={this.onSubmit}
                  onChange={this.onChange}
               />
            </ToggleBox>
            <ListMemories memories={memories} />
         </div>
      );
   }
}
