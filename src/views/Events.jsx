import React, { Component } from 'react';
import axios from 'axios';

import Wrapper from '../components/Wrapper';
import ListEvents from '../components/ListEvents';

export default class Events extends Component {
   state = {
      events: [],
   };

   componentDidMount() {
      this.getEvemts();
   }

   getEvemts = () => {
      axios
         .get('/api/events')
         .then((res) => {
            if (res.data) {
               this.setState({
                  events: res.data,
               });
            }
         })
         .catch((err) => console.log(err));
   };

   render() {
      const text = 'Join us at one of our upcoming events!';
      let { events } = this.state;

      return (
         <React.Fragment>
            <Wrapper
               wrap="style1"
               title="Upcoming Events"
               id="email"
               top
               text={text}
            />
            {events.length === 0 ? (
               <p className="no-data-msg">
                  We don't have any events planned at the momemt, but we will
                  let you know when we do!
               </p>
            ) : null}
            <ListEvents events={events} />
         </React.Fragment>
      );
   }
}
