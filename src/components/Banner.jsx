import React, { Component } from 'react';

export default class Banner extends Component {
  render() {
    return (
      <section id="banner">
        <div className="inner">
          <header>
            <h1>
              T<span className="smaller">EAM</span> C
              <span className="smaller">ALEB</span>
            </h1>
            <p>
              <i>THE BALL IS ALWAYS IN YOUR COURT</i>
            </p>
          </header>

          {/* <a href="#main" className="button big scrolly">Learn More</a> */}
        </div>
      </section>
    );
  }
}
