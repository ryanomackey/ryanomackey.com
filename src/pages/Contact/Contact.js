import React from 'react';

import { Container, Link, Icon, Text } from './Contact.styles';

const Contact = () => (
  <Container>
    <Link href="mailto:ryan.o.mackey@gmail.com" id="email">
      <Icon className="fa fa-envelope fa-3x" aria-hidden="true" />
      <Text>Email</Text>
    </Link>
    <Link
      href="https://github.com/ryanomackey"
      id="github"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="fa fa-github fa-3x" aria-hidden="true" />
      <Text>GitHub</Text>
    </Link>
    <Link
      href="https://linkedin.com/in/ryan-mackey"
      id="linkedin"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="fa fa-linkedin-square fa-3x" aria-hidden="true" />
      <Text>LinkedIn</Text>
    </Link>
    <Link
      href="https://twitter.com/ReadOnlyMackey"
      id="twitter"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="fa fa-twitter-square fa-3x" aria-hidden="true" />
      <Text>Twitter</Text>
    </Link>
  </Container>
);

export default Contact;
