import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import { Theme } from '../theme';

export interface SafeAreaViewProps {
  children: ReactNode;
  fillTop?: boolean;
  fillBottom?: boolean;
}

export function SafeAreaView(props: SafeAreaViewProps) {
  const { children, fillTop, fillBottom } = props;
  return (
    <Container>
      {fillTop ? <BackgroundTop /> : null}
      {fillBottom ? <BackgroundTop /> : null}
      <StyledSafeAreaView>
        {children}
      </StyledSafeAreaView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background: ${Theme.colors.backgroundDark};
`;

const BackgroundTop = styled.View`
  width: 100%;
  height: 50%;
  background: ${Theme.colors.primary};
`;

const StyledSafeAreaView = styled.SafeAreaView`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
`;
