import React, { Component } from 'react';

import Form from './Form';
import Button from './Button';

export default class Wrapper extends Component {
   render() {
      const style = 'wrapper ' + this.props.wrap;
      return (
         <section className={style}>
            {this.props.img === undefined ? (
               <div className="inner_a">
                  <header className="align-center">
                     <h1 className={this.props.top ? 'title' : null}>
                        {this.props.title}
                     </h1>
                     <p>
                        {this.props.text}
                        {this.props.addedElement}
                     </p>
                     {this.props.button ? (
                        <Button
                           link={this.props.button.link}
                           text={this.props.button.text}
                        />
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
