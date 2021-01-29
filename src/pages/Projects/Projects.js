import React from 'react';

import Project from '../../components/Project';

import projects from '../../data/projects.json';

import { Container, Title, Date, Description } from './Projects.style';

const Projects = () => (
  <Container>
    <Title>Projects</Title>
    <Description>
      Here are a few sites I tinker with from time to time.
    </Description>
    {projects.projects.map(project => (
      <Project {...project} key={Math.random(1000)} />
    ))}
    <hr />
    <Title>Galvanize Projects</Title>
    <Date>(c. 2016)</Date>
    <Description>
      {` Projects created throughout the course of a 6 month coding bootcamp I
      attended in 2016. Haven't really maintained them, but certainly fun to
      keep listed for nostalgic purposes. Enjoy!`}
    </Description>
    {projects.galvanize.map(project => (
      <Project {...project} key={Math.random(1000)} />
    ))}
  </Container>
);

export default Projects;
