import React, { Component } from 'react';

export default class Form extends Component {
   constructor(props) {
      super(props);
      this.props = this.props.form;
   }

   render() {
      return (
         <div id="form">
            <form
               style={this.props.style}
               method={this.props.method}
               name="form"
               action={this.props.action}
            >
               {this.props.inputs.map((input, index) => (
                  <input
                     key={index}
                     className={input.className ? input.className : null}
                     type={input.type}
                     name={input.name}
                     placeholder={input.placeholder}
                     required={input.required ? true : false}
                  />
               ))}

               {this.props.textarea ? (
                  <textarea
                     name="msg"
                     placeholder="Your Message"
                     required
                  ></textarea>
               ) : null}
               <input
                  className="submit"
                  type="submit"
                  name="submit"
                  value={this.props.submit}
               />
            </form>

            <p className="push">
               *You can expect a response within 24 - 48 hours
            </p>
         </div>
      );
   }
}
