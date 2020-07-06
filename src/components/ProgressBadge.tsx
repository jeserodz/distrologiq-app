import React from 'react';
import styled from 'styled-components/native';
import {Theme} from '../theme';
import {Text} from './Text';

export interface ProgressBadgeProps {
  style?: object;
  value: number;
}

export function ProgressBadge(props: ProgressBadgeProps) {
  const {style = {}, value = 0} = props;
  return (
    <Container style={style}>
      <Text font={Text.Fonts.ArvoBold} size={8}>
        {value}%
      </Text>
    </Container>
  );
}

const Container = styled.View`
  background: ${Theme.colors.info};
  border-radius: 10px;
  padding: 3px 20px;
  align-items: center;
  justify-content: center;
`;
