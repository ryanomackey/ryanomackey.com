import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid black;
  margin: 5rem auto;
  padding: 2rem;
  width: 406px;

  @media screen and (max-width: 425px) {
    width: 80%;
  }
`;

export default {
  Container,
};
