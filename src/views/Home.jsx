import React, { Component } from 'react';

import Banner from '../components/Banner';
import Wrapper from '../components/Wrapper';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Wrapper
          wrap="style1"
          img="../assets/img/mission.jpg"
          alt="Runner in Team Caleb shirt"
          title="Our Mission"
          id="mission"
          text="Our mission is to provide sports programs in underprivileged
                communities with the necessary funds and equipment to play the
                sports every child loves."
        />
        <Wrapper
          wrap="style2"
          img="../assets/img/caleb.jpg"
          alt="Photo of Caleb Penn Maeir"
          title="About Us"
          text="Team Caleb began in 2015, when our close friend,
          Caleb Maeir, was diagnosed with cancer. As a humble group of
          high-schoolers, we rallied together in support of Caleb and to
          remind him that he was never alone in his courageous, but
          difficult, battle. Prior to his diagnosis, Caleb was an avid
          sports player. Between basketball and baseball, he was a model
          athlete, setting the ultimate precedent for sportsmanship and
          leadership. Of everything he endured over his three year battle,
          one of the hardest was stepping away from the game. While there
          was nothing we could do to help Caleb play sports again, there
          are many children all over the country who we can help.
          These children are unable to play the games that Caleb loved due
          to lacking funds and equipment. Since Caleb’s passing in December
          2017, we have made it our mission to keep Caleb’s legacy alive by
          raising funds and buying equipment for sports programs in
          underprivileged communities."
        />
        <Wrapper
          wrap="style1"
          header
          title="Join the Team!"
          text="Come join us at one of our upcoming events!"
        />
      </div>
    );
  }
}
