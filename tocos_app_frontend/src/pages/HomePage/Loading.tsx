import React from 'react';
import { CircularProgress } from '@mui/material';
import * as S from './Loading.styled';

const Loading = function Loading() {
  return (
    <>
      <S.Background />
      <S.Progress><CircularProgress color='inherit' /></S.Progress>
    </>
  );
};

export default Loading;
