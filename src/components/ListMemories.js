import React from 'react';

import Wrapper from '../components/Wrapper';

const ListMemories = ({ memories }) => {
   return (
      <ul>
         {memories.map((memory, index) => {
            let text = memory.text;
            let info = { author: memory.author, date: memory.createdAt };
            return (
               <Wrapper
                  wrap={index % 2 === 1 ? 'style1' : 'style2'}
                  title={memory.title}
                  image={memory.image}
                  text={text}
                  info={info}
               />
            );
         })}
      </ul>
   );
};

export default ListMemories;
