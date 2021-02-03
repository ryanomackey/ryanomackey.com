import React from 'react';

import { Container, Image, Article } from './Home.styles';

import image from '../../images/hotel-vegas.png';

const Home = () => (
  <Container>
    <Image
      src={image}
      alt="Ryan on stage at Hotel Vegas with The Coffin Fits"
    />
    <Article>
      <p>
        Ryan is a professional software developer and a <i>very</i> amateur
        musician living in Austin, Texas.
      </p>

      <p>
        Born and raised in Fort Collins, Colorado, Ryan attended Colorado State
        University, graduating with a B.A. in Political Science. A degree which,
        so far, has only allowed him to be slightly more philosophical when
        panicking about the news everyday.
      </p>

      <p>
        After college, Ryan briefly worked with his father in the financial
        services industry before realizing he wasn&apos;t a particularly good
        salesman and transitioning to a career in web development.
      </p>

      <p>
        Ryan attended a 6-month, web development immersive through Galvanize
        before landing a position at IBM and moving to Austin to work as a
        front-end developer on IBM Cloud.
      </p>

      <p>
        While in Austin, Ryan started playing guitar in a band called{' '}
        <a href="https://coffinfits.rip">The Coffin Fits</a>, and started
        playing shows with them around the area. Not so much during the
        pandemic. Partially due to the closure of many live music venues, but
        also because the band name is now in somewhat poor taste.
      </p>

      <p>
        A survivor of a rare childhood cancer, Ryan has lived life without the
        use of his left eye and wears a prosthetic. This largely hasn&apos;t
        been a huge deal with the exception of needing to turn his head slightly
        further to the left when changing lanes in traffic.
      </p>
    </Article>
  </Container>
);

export default Home;
