import React from 'react';
import styled from 'styled-components/native';
import { Theme } from '../theme';
import { Text } from './Text';

export interface InfoBlockProps {
  label: string;
  value: string;
}

export function InfoBlock(props: InfoBlockProps) {
  const { label, value } = props;
  return (
    <Contanier>
      <Text color={Theme.colors.textPrimary} font={Text.Fonts.ArvoBold} marginBottom={12}>
        {label}
      </Text>
      <Text>
        {value}
      </Text>
    </Contanier>
  );
}

const Contanier = styled.View`
  width: 100%;
  margin-bottom: 25px;
`;
