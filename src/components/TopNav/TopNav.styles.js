import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  align-items: center;
  background-color: white;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: space-between;
  padding: 0 0.5rem;

  @media (max-width: 571px) {
    justify-content: center;
  }
`;

export const Title = styled(Link)`
  font-family: 'Raleway', sans-serif;
  font-size: 3em;
  font-weight: 900;
  margin: 0;
  color: black;
  text-decoration: none;

  @media screen and (max-width: 375px) {
    font-size: 2em;
  }
`;

export const Links = styled.ul`
  display: flex;
  font-family: 'Raleway', sans-serif;
  font-weight: 900;
  justify-content: space-between;
  list-style: none;
  list-style-type: none;
  padding: 0;
`;

export const StyledLink = styled(NavLink)`
  display: inline;
  padding: 8px;
  color: black;
  text-decoration: none;

  :not(:first-of-type) {
    border-left: 1px solid black;
  }

  :hover,
  &.active {
    background-color: black;
    color: white;
  }
`;

export default {
  Nav,
  Title,
  Links,
  StyledLink,
};
