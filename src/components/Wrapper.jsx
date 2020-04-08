import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Form from './Form';

export default class Wrapper extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      const style = 'wrapper ' + this.props.wrap;
      return (
         <section className={style}>
            {this.props.img === undefined ? (
               <div className="inner_a">
                  <header className="align-center">
                     <h1>{this.props.title}</h1>
                     <p>{this.props.text}</p>
                     {this.props.button ? (
                        <NavLink to={this.props.button.link} className="button">
                           {this.props.button.text}
                        </NavLink>
                     ) : null}
                  </header>
                  {this.props.form ? <Form {...this.props.form} /> : null}
               </div>
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
