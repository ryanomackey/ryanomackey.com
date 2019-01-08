import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 80%;

  a {
    box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.6);
    display: block;
    font-family: 'Raleway', sans-serif;
    margin: 9% auto;
    opacity: 0;
    padding: 8px;
    text-decoration: none;
    width: 30%;

    i {
      color: black;
      padding-left: 5%;
    }

    span {
      color: black;
      display: inline;
      font-family: 'Raleway', sans-serif;
      font-size: 2em;
      padding-left: 5%;
    }

    &:hover {
      background-color: black;

      i {
        color: white;
      }

      span {
        color: white;
      }
    }
  }

  #email {
    animation: fadeIn 0.1s linear 0.5s forwards;
  }

  #github {
    animation: fadeIn 0.1s linear 0.6s forwards;
  }

  #linkedin {
    animation: fadeIn 0.1s linear 0.7s forwards;
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
    .contact-links {
      width: 90%;

      a {
        width: auto;
      }
    }
  }
`;

export default {
  Container,
};
