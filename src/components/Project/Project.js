import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Grid,
  Image,
  Content,
  Description,
  Link,
} from './Project.styles';

const Project = ({ title, screenshot, description, tech, links }) => {
  const image = require(`../../images/${screenshot}`); // eslint-disable-line

  return (
    <Container>
      <h3>{title}</h3>
      <Grid>
        <Image image={image} />
        <Content>
          <Description>{description}</Description>
          <p>{tech}</p>
          {links.map(({ description: linkDescription, url }) => (
            <Link
              href={url}
              key={Math.random(1000)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkDescription}
            </Link>
          ))}
        </Content>
      </Grid>
    </Container>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  screenshot: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Project;
