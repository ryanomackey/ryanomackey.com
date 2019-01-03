import React from 'react';
import PropTypes from 'prop-types';

import TopNav from '../TopNav';

import { Container } from './Layout.styles';

const Layout = ({ children }) => (
  <Container>
    <TopNav />
    {children}
  </Container>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
