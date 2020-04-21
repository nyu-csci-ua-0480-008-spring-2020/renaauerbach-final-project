import React, { Component } from 'react';
import axios from 'axios';

import Form from './Form';
import ListMemories from './ListMemories';

export default class Memories extends Component {
   state = {
      memories: [],
   };

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

   render() {
      let { memories } = this.state;

      return (
         <React.Fragment>
            <h1>Memory Book</h1>
            <Form getMemories={this.getMemories} />
            <ListMemories memories={memories} />
         </React.Fragment>
      );
   }
}
