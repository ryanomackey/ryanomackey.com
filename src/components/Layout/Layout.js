import React from 'react';
import PropTypes from 'prop-types';

import TopNav from '../TopNav';

import { Container } from './Layout.styles';
import ChristmasLights from '../ChristmasLights';

const Layout = ({ children }) => (
  <Container>
    <TopNav />
    <ChristmasLights />
    {children}
  </Container>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
