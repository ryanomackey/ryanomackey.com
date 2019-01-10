import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 80%;

  #email {
    animation: fadeIn 0.1s linear 0.5s forwards;
  }

  #github {
    animation: fadeIn 0.1s linear 0.6s forwards;
  }

  #linkedin {
    animation: fadeIn 0.1s linear 0.7s forwards;
  }

  #twitter {
    animation: fadeIn 0.1s linear 0.8s forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Link = styled.a`
  align-items: center;
  box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.6);
  display: flex;
  margin: 9% auto;
  opacity: 0;
  padding: 8px;
  text-decoration: none;
  width: 30%;

  @media (max-width: 768px) {
    width: auto;
  }

  &:hover {
    background-color: black;

    span,
    i {
      color: white;
    }
  }
`;

export const Icon = styled.i`
  color: black;
  padding-left: 5%;
`;

export const Text = styled.span`
  color: black;
  display: inline;
  font-size: 2em;
  padding-left: 5%;
`;

export default {
  Container,
  Link,
  Icon,
};
