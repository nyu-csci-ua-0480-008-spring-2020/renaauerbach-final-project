import React, { Component } from 'react';

import Wrapper from '../components/Wrapper';

export default class Events extends Component {
   constructor() {
      super(props);
      this.state = {
         isLoading: false,
         events: [],
      };
   }

   componentDidMount = async () => {
      this.setState({ isLoading: true });

      await api.getAllMovies().then((movies) => {
         this.setState({
            movies: movies.data.data,
            isLoading: false,
         });
      });
   };

   render() {
      const text = 'Join us at one of our upcoming events!';

      return (
         <div className="main">
            <Wrapper
               wrap="style1"
               title="Upcoming Events"
               id="email"
               text={text}
            />
         </div>
      );
   }
}
