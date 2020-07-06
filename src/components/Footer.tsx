import React from 'react';
import styled from 'styled-components/native';
import { Theme } from '../theme';

export function Footer() {
  return (
    <Container></Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: 60px;
  background-color: ${Theme.colors.primary};
  padding: 20px 25px;
`;
