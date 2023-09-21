import styled from 'styled-components';
import { textColor } from '../styles';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: ${textColor};
`;

export const BottomPanel = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex: 1;
  position: relative;
  overflow: hidden;
`;
