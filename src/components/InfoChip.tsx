import React from 'react';
import styled from 'styled-components/native';
import { Text } from './Text';
import { Theme } from '../theme';

export interface InfoChipProps {
  label: string;
  value: string;
}

export function InfoChip(props: InfoChipProps) {
  const { label, value } = props;
  return (
    <Container>
      <Text size={8} font={Text.Fonts.ArvoBold} marginRight={4}>
        {label}
      </Text>
      <Text size={8} font={Text.Fonts.ArvoBold} color={Theme.colors.textPrimary}>
        {value}
      </Text>
    </Container>
  );
}

const Container = styled.View`
  width: 131px;
  height: 38px;
  background-color: rgba(255,255,255,0.06);
  border: 1px solid #5F5E5E;
  border-radius: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
