import React from 'react';

import Wrapper from '../components/Wrapper';

const ListEvents = ({ events }) =>
   events.map((event, index) => {
      let text = event.text;
      let info = { author: event.author, date: event.createdAt };
      return (
         <Wrapper
            wrap={index % 2 === 1 ? 'style1' : 'style2'}
            title={event.title}
            image={event.image}
            text={text}
            info={info}
         />
      );
   });

export default ListEvents;
