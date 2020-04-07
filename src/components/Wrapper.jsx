import React, { Component } from 'react';

export default class Wrapper extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      const style = 'wrapper ' + this.props.wrap;
      return (
         <section className={style}>
            {this.props.img == undefined ? (
               <header className="align-center">
                  <h2>{this.props.title}</h2>
                  <p>{this.props.text}</p>
               </header>
            ) : (
               <div className="inner">
                  <div className="flex flex-2">
                     <div className="col col1">
                        <div className="image round fit">
                           <img src={this.props.img} alt={this.props.alt} />
                        </div>
                     </div>
                     <div className="col col2">
                        <h3>{this.props.title}</h3>
                        <p id={this.props.id}>{this.props.text}</p>
                     </div>
                  </div>
               </div>
            )}
         </section>
      );
   }
}
