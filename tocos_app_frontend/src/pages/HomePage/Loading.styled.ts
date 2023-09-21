import styled from 'styled-components';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
  opacity: 0.7;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const Progress = styled.div`
  position: fixed;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
  z-index: 11;
  color: yellow;
`;
