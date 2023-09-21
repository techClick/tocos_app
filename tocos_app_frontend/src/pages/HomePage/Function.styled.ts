import styled, { CSSProperties } from 'styled-components';

export const Container = styled.div`
  width: max-content;
  background: lightgreen;
`;

export const TopContainer = styled.div`
  width: 70vw;
  max-width: 500px;
  height: max-content;
  padding: 30px 20px;
  background: white;
  border-left: 20px solid #717171;
`;

export const TitleAndButton = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #4b4b4b;
  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  margin-left: auto;
`;

export const InputContainer = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 10px;
`;

export const Input = styled.input<{ width: CSSProperties['width'] }>`
  width: ${({ width }) => width};
  height: 50px;
  padding-left: 10px;
  font-size: 15px;
`;

export const ResultContainer = styled.div<{ showThisResult: boolean }>`
  width: 70vw;
  max-width: 500px;
  min-height: 0px;
  height: ${({ showThisResult }) => showThisResult ? '20px' : '0px'};
  padding: ${({ showThisResult }) => showThisResult ? '20px 20px' : '0px 20px'};;
  background: #efefef;
  border-left: 20px solid lightgreen;
  transition: all .35s ease-in-out;
`;

export const Result = styled.div`
  font-size: 15px;
`;
