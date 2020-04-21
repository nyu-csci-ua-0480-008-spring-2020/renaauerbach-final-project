import React, { Component } from 'react';
import axios from 'axios';

import ListEvents from './ListEvents';

export default class Events extends Component {
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
      const text = 'Join us at one of our upcoming events!';
      let { memories } = this.state;

      return (
         <React.Fragment>
            <Wrapper
               wrap="style1"
               title="Upcoming Events"
               id="email"
               text={text}
            />
            <ListEvents events={events} />
         </React.Fragment>
      );
   }
}
