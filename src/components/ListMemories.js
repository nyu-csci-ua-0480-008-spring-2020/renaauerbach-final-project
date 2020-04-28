import React from 'react';

const ListMemories = ({ memories }) => {
   return memories.length > 0 ? (
      memories.map((memory, index) => {
         let date = new Date(memory.createdAt);
         return (
            <section className="style1 memories">
               <div className="inner_a post">
                  <header className="align-center">
                     <h4 className="data title">{memory.title}</h4>
                     <span className="details">{'By ' + memory.author}</span>
                     <span className="details">
                        {'Date: ' +
                           date.toDateString().split(' ').slice(1).join(' ')}
                     </span>
                     {/* <Button */}
                     {/*    link={this.props.button.link} */}
                     {/*    text={this.props.button.text} */}
                     {/* /> */}
                  </header>
                  <p>{memory.text}</p>
               </div>
            </section>
         );
      })
   ) : (
      <div className="missing-block">
         <p className="no-data-msg">Be the first to add a memory!</p>
      </div>
   );
};

export default ListMemories;
