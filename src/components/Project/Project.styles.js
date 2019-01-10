import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 6rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  @media screen and (max-width: 767px) {
    grid-template-columns: 100%;
  }
`;

export const Image = styled.img`
  background-image: url(${({ image }) => image});
  background-position: center;
  background-size: cover;
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.1);
  min-height: 327px;
  width: 100%;
`;

export const Content = styled.div`
  padding: 0 2rem;

  @media screen and (max-width: 767px) {
    margin-top: 2rem;
    padding: 0;
  }
`;

export const Description = styled.p`
  margin-top: 0;
`;

export const Link = styled.a`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  color: black;
  display: inline-block;
  margin: 0 1% 1% 0;
  padding: 5px;
  text-decoration: none;

  :hover {
    background-color: black;
    color: white;
  }
`;

export default {
  Container,
  Grid,
  Image,
  Content,
  Description,
  Link,
};
