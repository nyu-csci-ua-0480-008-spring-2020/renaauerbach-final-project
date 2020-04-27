import React from 'react';

import Wrapper from '../components/Wrapper';

const ListEvents = ({ events }) => {
   return events.length > 0 ? (
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
      })
   ) : (
      <div className="missing-block">
         <p className="no-data-msg">
            We don't have any events planned at the momemt, but we will let you
            know when we do!
         </p>
      </div>
   );
};

export default ListEvents;
