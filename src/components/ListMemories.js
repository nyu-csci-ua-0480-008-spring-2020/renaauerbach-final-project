import React from 'react';

import Wrapper from '../components/Wrapper';

const ListMemories = ({ memories }) =>
   memories.map((memory, index) => {
      let info = { author: memory.author, date: memory.createdAt };
      return (
         <Wrapper
            wrap={index % 2 === 1 ? 'style1' : 'style2'}
            title={memory.title}
            image={memory.image}
            text={memory.text}
            info={info}
         />
      );
   });

export default ListMemories;
