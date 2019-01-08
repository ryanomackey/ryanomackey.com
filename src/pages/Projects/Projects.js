import React from 'react';

import Project from '../../components/Project';

import projects from '../../data/projects.json';

import { Container, Title, Date } from './Projects.style';

const Projects = () => (
  <Container>
    <Title>Galvanize Projects</Title>
    <Date>(c. 2016)</Date>
    {projects.map(project => (
      <Project {...project} key={Math.random(1000)} />
    ))}
  </Container>
);

export default Projects;
