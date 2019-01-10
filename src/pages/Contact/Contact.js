import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';

import { Container, Link, Icon, Text } from './Contact.styles';

const Contact = () => (
  <Container>
    <Link href="mailto:ryan.o.mackey@gmail.com" id="email">
      <Icon icon={faEnvelope} size="3x" />
      <Text>Email</Text>
    </Link>
    <Link
      href="https://github.com/ryanomackey"
      id="github"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon icon={faGithub} size="3x" />
      <Text>GitHub</Text>
    </Link>
    <Link
      href="https://linkedin.com/in/ryan-mackey"
      id="linkedin"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon icon={faLinkedin} size="3x" />
      <Text>LinkedIn</Text>
    </Link>
    <Link
      href="https://twitter.com/ReadOnlyMackey"
      id="twitter"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon icon={faTwitterSquare} size="3x" />
      <Text>Twitter</Text>
    </Link>
  </Container>
);

export default Contact;
