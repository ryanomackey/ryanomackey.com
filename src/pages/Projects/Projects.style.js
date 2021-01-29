import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem auto;
  max-width: 1152px;
  width: 80%;
`;

export const Title = styled.h1`
  display: inline-block;
`;

export const Date = styled.p`
  display: inline-block;
  margin-left: 0.5rem;
`;

export const Description = styled.p`
  margin-bottom: 2rem;
`;

export default {
  Container,
  Title,
  Date,
  Description,
};
