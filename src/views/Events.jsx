import React, { Component } from 'react';
import axios from 'axios';

import Wrapper from '../components/Wrapper';
import ListEvents from '../components/ListEvents';

export default class Events extends Component {
   constructor(props) {
      super(props);
      this.state = { events: [] };
   }

   componentDidMount() {
      axios
         .get('http://localhost:3001/api/events')
         .then((res) => {
            this.setState({ events: res.data });
            console.log('Events: ', res.data);
         })
         .catch(function (err) {
            console.log(err);
         });
   }

   render() {
      const text = 'Join us at one of our upcoming events!';
      let { events } = this.state;

      return (
         <div className="main">
            <Wrapper
               wrap="style1"
               title="Upcoming Events"
               id="email"
               top
               text={text}
            />
            <ListEvents events={events} />
         </div>
      );
   }
}
