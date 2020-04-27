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
         .get('http://localhost:4000/api/events')
         .then((res) => {
            this.setState({ events: res.data });
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
            {' '}
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
         </div>
      );
   }
}
