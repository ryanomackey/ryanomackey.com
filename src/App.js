import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

import Router from './Router';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Raleway'
  }
`;

const App = () => (
  <>
    <Normalize />
    <GlobalStyles />
    <Router />
  </>
);

export default hot(App);
