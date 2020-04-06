import React, { Component } from "react";

export default class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const classname = "wrapper " + {this.props.style};
    return (
      <section class={classname}>
        <div class="inner">
          <div class="flex flex-2">
            <div class="col col1">
              <div class="image round fit">
                <img src={this.props.img} alt="" />
              </div>
            </div>
            <div class="col col2">
              <h3>{this.props.title}</h3>
              <p id="mission">
                Our mission is to provide sports programs in underprivileged
                communities with the necessary funds and equipment to play the
                sports every child loves.
              </p>

              {/* <a href="#" class="button">Learn More</a> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
