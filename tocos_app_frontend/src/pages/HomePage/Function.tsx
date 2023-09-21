import React from 'react';
import { Button } from '@mui/material';
import * as S from './Function.styled';

type FunctionProps = {
  title?: string,
  buttonText?: string,
  inputPlaceholders?: string[],
  inputValues?: number[],
  handleInputChange?: Function[],
  onClick?: () => void,
}
const Function = function Function({
  title,
  buttonText,
  inputPlaceholders,
  inputValues,
  handleInputChange,
  onClick,
}: FunctionProps) {
  return (
    <S.Container>
      <S.TitleAndButton>
        {title}
        <S.ButtonContainer>
          <Button
            variant='outlined'
            onClick={() => onClick?.()}
          >
            {buttonText}
          </Button>
        </S.ButtonContainer>
      </S.TitleAndButton>
      {
        inputPlaceholders ? (
          <S.InputContainer>
            {
              inputPlaceholders.map((placeholder, i) => (
                <S.Input
                  value={(inputValues?.[i] || '').toString()}
                  width={`calc(${100 / inputPlaceholders.length}% - 10px)`}
                  placeholder={placeholder}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange?.[i]?.(e)}
                  type='number'
                />
              ))
            }
          </S.InputContainer>
        ) : (null)
      }
    </S.Container>
  );
};

export default Function;
