import React from 'react';

import { Nav, Title, Links, StyledLink } from './TopNav.styles';

const TopNav = () => (
  <Nav>
    <Title to="/">Ryan O. Mackey</Title>
    <Links>
      <StyledLink activeClassName="active" to="/" exact>
        Home
      </StyledLink>
      <StyledLink activeClassName="active" to="/projects">
        Projects
      </StyledLink>
      <StyledLink activeClassName="active" to="/contact">
        Contact
      </StyledLink>
    </Links>
  </Nav>
);

export default TopNav;
