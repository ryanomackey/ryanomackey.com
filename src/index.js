import React from 'react';
import { render } from 'react-dom';

// Polyfills
import 'intersection-observer';

import App from './App';

const root = document.getElementById('root');

render(<App />, root);
