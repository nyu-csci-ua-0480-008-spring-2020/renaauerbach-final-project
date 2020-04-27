import React, { Component } from 'react';

export default class Form extends Component {
   constructor(props) {
      super(props);
      this.props = this.props.form;
      this.state = {
         submitted: false,
      };

      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit = () => {
      this.setState({
         submitted: true,
      });
   };

   render() {
      return (
         <div id="form">
            <form
               style={this.props.style}
               method={this.props.method}
               name="form"
               action={this.props.action}
            >
               {this.props.inputs.map((input, index) => [
                  <input
                     key={index}
                     className={input.className ? input.className : null}
                     type={input.type}
                     name={input.name}
                     value={imput.value}
                     onChange={this.props.onChange}
                     placeholder={input.placeholder}
                     required={input.required ? true : false}
                  />,
                  <br />,
               ])}
               {this.props.textarea ? (
                  <textarea
                     name="msg"
                     placeholder={this.props.textPlaceholder}
                     required
                  ></textarea>
               ) : null}
               <br />
               <input
                  className="submit"
                  type="submit"
                  name="submit"
                  onClick={this.props.onClick}
                  value={this.props.submit}
               />
            </form>
         </div>
      );
   }
}
