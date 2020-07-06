import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import { Fonts } from '../theme';

interface TextProps {
  children: ReactNode,
  font?: Fonts,
  size?: number,
  color?: string,
  marginBottom?: number,
  marginRight?: number,
}

export function Text(props: TextProps) {
  const {
    children,
    font = Fonts.ArvoRegular,
    size = 12,
    color = '#FFF',
    marginBottom = 0,
    marginRight = 0,
  } = props;

  return (
    <StyledText font={font} size={size} color={color} marginBottom={marginBottom} marginRight={marginRight}>
      {children}
    </StyledText>
  );
}

Text.Fonts = Fonts;

const StyledText = styled.Text<{ size: number, font: Fonts, color: string, marginBottom: number, marginRight: number}>`
  font-family: ${props => props.font};
  font-size: ${props => props.size}px;
  color: ${props => props.color};
  margin-bottom: ${props => props.marginBottom}px;
  margin-right: ${props => props.marginRight}px;
`;
