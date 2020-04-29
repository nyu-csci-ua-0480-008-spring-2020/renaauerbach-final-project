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
               className={this.props.className}
               style={this.props.style}
               method={this.props.method}
               name="form"
               action={this.props.action}
               onSubmit={this.props.onSubmit}
            >
               {this.props.inputs.map((input, index) => [
                  <input
                     key={index}
                     className={input.className ? input.className : null}
                     type={input.type}
                     name={input.name}
                     value={input.value}
                     onChange={this.props.onChange}
                     placeholder={input.placeholder}
                     required={input.required ? true : false}
                  />,
                  <br />,
               ])}
               {this.props.textarea ? (
                  <textarea
                     name="text"
                     placeholder="Enter your message here"
                     value={this.props.textValue}
                     onChange={this.props.onChange}
                     required
                  ></textarea>
               ) : null}
               <br />
               <input
                  className="submit"
                  type="submit"
                  name="submit"
                  value={this.props.submit}
               />
            </form>
         </div>
      );
   }
}
