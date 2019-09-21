import styled from 'styled-components';

export const Wire = styled.ul`
  border-bottom: 2px solid #222;
  padding: 0;
  position: absolute;
  text-align: center;
  top: 30px;
  white-space: nowrap;
  width: 100%;

  @media (max-width: 622px) {
    top: 80px;
  }

  body {
    overflow-x: hidden;
  }
`;

export const Bulb = styled.li`
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  animation-name: even-flash;
  background: #fff;
  border-radius: 50%;
  display: inline-block;
  height: 30px;
  list-style: none;
  margin: 0 15px;
  padding: 0;
  position: relative;
  top: 35px;
  width: 15px;

  &:nth-child(odd) {
    animation-name: odd-flash;
  }

  &::before {
    background: #444;
    border-radius: 4px;
    content: '';
    height: 10px;
    left: 0;
    position: absolute;
    top: -5px;
    width: 14px;
  }

  --even-color-bright: rgba(255, 0, 0, 1);
  --even-color-dim: rgba(255, 0, 0, 0.5);
  --even-color-dim-shadow: rgba(255, 0, 0, 0.3);

  @keyframes even-flash {
    0% {
      background: var(--even-color-bright);
      box-shadow: 0 2px 20px 4px var(--even-color-bright);
    }
    50% {
      background: var(--even-color-dim);
      box-shadow: 0 2px 20px 4px var(--even-color-dim-shadow);
    }
    100% {
      background: var(--even-color-bright);
      box-shadow: 0 2px 20px 4px var(--even-color-bright);
    }
  }

  --odd-color-bright: rgba(0, 255, 0, 1);
  --odd-color-dim: rgba(0, 255, 0, 0.5);
  --odd-color-dim-shadow: rgba(0, 255, 0, 0.3);

  @keyframes odd-flash {
    0% {
      background: var(--odd-color-dim);
      box-shadow: 0 2px 20px 4px var(--odd-color-dim-shadow);
    }
    50% {
      background: var(--odd-color-bright);
      box-shadow: 0 2px 20px 4px var(--odd-color-bright);
    }
    100% {
      background: var(--odd-color-dim);
      box-shadow: 0 2px 20px 4px var(--odd-color-dim-shadow);
    }
  }
`;

export default {
  Wire,
  Bulb,
};
