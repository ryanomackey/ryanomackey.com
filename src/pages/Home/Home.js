import React from 'react';
import { Link } from 'react-router-dom';

import TypedText from '../../components/TypedText';

import { Container } from './Home.styles';

const Home = () => (
  <Container>
    <h3>
      <TypedText text={`Hey, I'm Ryan's website.`} delay={0} />
    </h3>
    <p>
      <TypedText text="Check out some of " delay={2500} />
      <Link to="/projects">
        <TypedText text="his work" delay={4100} />
      </Link>
      <TypedText text=" here." delay={4800} />
    </p>
    <p>
      <TypedText text="Or, " delay={5500} />
      <Link to="/contact">
        <TypedText text="get in touch with him" delay={6300} />
      </Link>
      <TypedText text="." delay={8000} />
    </p>
    <p>
      <TypedText text="Or don't. " delay={9000} />
      <TypedText text="I'm a website, not a cop." delay={9900} />
    </p>
  </Container>
);

export default Home;
