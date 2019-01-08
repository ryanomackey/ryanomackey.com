import React from 'react';

import { Container } from './Contact.styles';

const Contact = () => (
  <Container>
    <a href="mailto:ryan.o.mackey@gmail.com" id="email">
      <i className="fa fa-envelope fa-3x" aria-hidden="true" />
      <span>Email</span>
    </a>
    <a
      href="https://github.com/ryanomackey"
      id="github"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa fa-github fa-3x" aria-hidden="true" />
      <span>GitHub</span>
    </a>
    <a
      href="https://linkedin.com/in/ryan-mackey"
      id="linkedin"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa fa-linkedin-square fa-3x" aria-hidden="true" />
      <span>LinkedIn</span>
    </a>
    <a
      href="https://twitter.com/ReadOnlyMackey"
      id="linkedin"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa fa-twitter-square fa-3x" aria-hidden="true" />
      <span>Twitter</span>
    </a>
  </Container>
);

export default Contact;
