import React from 'react';
import styled from 'styled-components/native';
import { Theme } from '../theme';
import { Text } from './Text';
import { TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
  label: string;
  error?: boolean;
  helperText?: string;
  width?: number;
}

export function Input(props: InputProps) {
  return (
    <Container width={props.width}>
      <Text font={Text.Fonts.ArvoBold} marginBottom={14}>
        {props.label}
      </Text>

      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
        autoCapitalize={props.autoCapitalize}
        autoCorrect={props.autoCorrect}
      />


      <Text color={props.error ? Theme.colors.error : '#fff'} marginBottom={14}>
        {(props.error === undefined || props.error)
          ? props.helperText
          : ''
        }
      </Text>

    </Container>
  );
}

const Container = styled.View<{ width?: number }>`
  width: ${({ width }) => width ? `${width}px` : '100%'};
`;

const TextInput = styled.TextInput`
  width: 100%;
  border-width: 1px;
  border-color: #fff;
  border-radius: 50px;
  padding: 12px 16px;
  margin-bottom: 14px;
  color: #fff;
  font-family: ${Text.Fonts.ArvoRegular};
  font-size: 12px;
  background-color: rgba(255,255,255,.05);
`;
