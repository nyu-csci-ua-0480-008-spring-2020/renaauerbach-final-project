import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <section id="banner">
        <div class="inner">
          <header>
            <h1>
              T<span class="smaller">EAM</span> C
              <span class="smaller">ALEB</span>
            </h1>
            <p>
              <i>THE BALL IS ALWAYS IN YOUR COURT</i>
            </p>
          </header>

          {/* <a href="#main" class="button big scrolly">Learn More</a> */}
        </div>
      </section>
    );
  }
}
