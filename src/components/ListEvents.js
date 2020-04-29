import React from 'react';

import ColumnWrapper from '../components/ColumnWrapper';

const ListEvents = ({ events, form }) => {
   return events.length > 0 ? (
      events.map((event, index) => {
         let date = new Date(event.date)
            .toDateString()
            .split(' ')
            .slice(1)
            .join(' ');

         const columns = [
            {
               class: 'align-center',
               img: {
                  src: event.image,
                  alt: 'Image of NYC Marathon',
               },
               title: event.title,
               text: event.text,
               span: [
                  {
                     details: 'Where: ' + event.location,
                  },
                  { details: 'When: ' + date },
               ],
               toggle: true,
               toggleButton: 'Register',
            },
         ];

         let flexClass = events.length > 1 ? 'flex-' + events.length : null;

         return (
            <div className={'flex ' + flexClass} key={event._id}>
               <ColumnWrapper event={event} columns={columns} form={form} />
            </div>
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
