import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template-columns: 50% 50%;
  margin: 5rem auto;
  max-width: 80%;

  @media screen and (max-width: 1130px) {
    grid-template-columns: 100%;
  }

  @media screen and (max-width: 425px) {
    margin: 0;
    max-width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const Article = styled.article`
  border: 1px solid black;
  padding: 2rem;

  p {
    line-height: 1.2;
  }
`;

export default {
  Container,
  Image,
  Article,
};
