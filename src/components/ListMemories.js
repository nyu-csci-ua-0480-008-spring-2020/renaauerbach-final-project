import React from 'react';

import Wrapper from '../components/Wrapper';

const ListMemories = ({ memories }) => {
   return memories.length > 0 ? (
      memories.map((memory, index) => {
         let info = { author: memory.author, date: memory.createdAt };
         return (
            <Wrapper
               key={index}
               wrap={index % 2 === 1 ? 'style1' : 'style2'}
               title={memory.title}
               image={memory.image}
               text={memory.text}
               info={info}
            />
         );
      })
   ) : (
      <div className="missing-block">
         <p className="no-data-msg">Be the first to add a memory!</p>
      </div>
   );
};

export default ListMemories;
