import React, { Component } from 'react';

export default class ToggleBox extends Component {
   constructor(props) {
      super(props);
      this.state = {
         opened: false,
      };
      this.toggleBox = this.toggleBox.bind(this);
   }

   toggleBox() {
      const { opened } = this.state;
      this.setState({
         opened: !opened,
      });
   }

   render() {
      let { children } = this.props;
      const { opened } = this.state;

      return (
         <div className="toggle">
            <p className="push">{this.props.text}</p>
            {opened ? (
               <div class="toggleContent">{children}</div>
            ) : (
               <div className="button" onClick={this.toggleBox}>
                  Share Memory
               </div>
            )}
         </div>
      );
   }
}
