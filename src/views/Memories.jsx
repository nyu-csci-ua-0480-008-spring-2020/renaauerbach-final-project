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

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
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

   handleChange(e) {
      this.setState({ [e.target.name]: e.target.value });
   }

   handleSubmit(e) {
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
            this.setState((prevState) => ({
               memories: [memory, ...prevState.memories],
               title: '',
               author: '',
               text: '',
               createdAt: {},
            }));
            this.componentDidMount();
            console.log(res.data);
         })
         .catch((err) => {
            console.log('Error in Memories:', err);
         });
   }

   handleDelete(id) {
      // e.preventDefault();
      console.log('id', id);
      axios
         .delete(`http://localhost:3001/api/memories/${id}`)
         .then((res) => {
            this.setState((prevState) => ({
               memories: [],
               title: '',
               author: '',
               text: '',
               createdAt: {},
            }));
            this.componentDidMount();
            console.log(res.data);
         })
         .catch((err) => {
            console.log('Error in Memories:', err);
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
            <ToggleBox action="show" text={toggleText} button="Share A Memory">
               <Form
                  method="POST"
                  inputs={inputs}
                  textarea
                  textValue={this.state.text}
                  submit="Share"
                  onSubmit={this.handleSubmit}
                  onChange={this.handleChange}
               />
            </ToggleBox>
            <ListMemories
               memories={memories}
               handleDelete={this.handleDelete}
            />
         </div>
      );
   }
}
