import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from '../components/Layout';

import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

const ApplicationRouter = () => (
  <Router>
    <Layout>
      <Route path="/" exact component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </Layout>
  </Router>
);

export default ApplicationRouter;
