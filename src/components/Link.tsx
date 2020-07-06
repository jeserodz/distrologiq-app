import React from 'react';
import { Linking } from 'react-native';
import styled from 'styled-components/native';
import { Text } from './Text';
import { useNavigation } from 'react-navigation-hooks';

export interface LinkProps {
  label: string;
  href?: string;
  screen?: string;
}

export function Link(props: LinkProps) {
  const { label, href, screen } = props;
  const { navigate } = useNavigation();

  function handlePress() {
    if (href) Linking.openURL(href);
    if (screen) navigate(screen);
  }

  return (
    <Container onPress={handlePress}>
      <Text>{label}</Text>
    </Container>
  );
}

const Container = styled.TouchableOpacity``;
