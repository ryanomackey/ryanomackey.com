import React from 'react';

import { Nav, Title, Links, StyledLink } from './TopNav.styles';

const TopNav = () => (
  <Nav>
    <Title to="/">Ryan O. Mackey</Title>
    <Links>
      <li>
        <StyledLink activeClassName="active" to="/" exact>
          Home
        </StyledLink>
      </li>
      <li>
        <StyledLink activeClassName="active" to="/projects">
          Projects
        </StyledLink>
      </li>
      <li>
        <StyledLink activeClassName="active" to="/contact">
          Contact
        </StyledLink>
      </li>
    </Links>
  </Nav>
);

export default TopNav;
