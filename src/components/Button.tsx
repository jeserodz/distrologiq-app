import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';
import { Text } from './Text';
import { Theme } from '../theme';

export interface ButtonProps extends TouchableOpacityProps {
  label: string;
}

export function Button(props: ButtonProps) {
  return (
    <Container onPress={props.onPress} {...props}>
      <Text font={Text.Fonts.ArvoBold}>
        {props.label}
      </Text>
    </Container>
  )
}

const Container = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  padding: 14px;
  background-color: ${Theme.colors.primary};
  border-radius: 50px;
  align-items: center;
  opacity: ${(props) => props.disabled ? 0.7 : 1};
`;
