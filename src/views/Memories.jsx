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
         image: '',
         createdAt: new Date(),
      };

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
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

   componentDidMount() {
      this.getMemories();
   }

   onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
   };

   onSubmit = (e) => {
      e.preventDefault();

      const data = {
         title: this.state.title,
         author: this.state.author,
         text: this.state.text,
         image: this.state.image,
         createdAt: this.state.createdAt,
      };

      axios
         .post('api/memories', data)
         .then((res) => {
            this.setState({
               title: '',
               author: '',
               text: '',
               image: '',
            });
            this.props.history.push('/');
         })
         .catch((err) => {
            console.log('Error in Memories');
         });
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
         <div className="main">
            {' '}
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
