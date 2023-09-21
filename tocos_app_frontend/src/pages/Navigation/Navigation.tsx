import React from 'react';
import * as S from './Navigation.styled';
import TopBar from './TopBar/TopBar';

const Navigation = function Navigation({ children }:{ children: any}) {
  return (
    <S.Container>
      <TopBar />
      <S.BottomPanel>
        {children}
      </S.BottomPanel>
    </S.Container>
  );
};

export default Navigation;
