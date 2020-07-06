import React from 'react';
import styled from 'styled-components/native';
import {Theme} from '../theme';
import leftChevron from '../images/left-chevron.png';
import {Text} from './Text';
import {useNavigation} from 'react-navigation-hooks';

export interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  backScreen?: string;
}

export function Header(props: HeaderProps) {
  const {title, showBackButton, backScreen} = props;
  const {navigate, goBack} = useNavigation();

  function handleBackButtonPress() {
    if (backScreen) {
      navigate(backScreen);
    } else {
      goBack();
    }
  }

  return (
    <Container>
      {showBackButton ? (
        <BackButton onPress={handleBackButtonPress} hitSlop={Theme.hitSlop}>
          <ButtonImage source={leftChevron} resizeMode="contain" />
        </BackButton>
      ) : null}

      <Spacer />

      <Text font={Text.Fonts.ArvoBold} size={16}>
        {title}
      </Text>

      <Spacer />

      {false ? (
        <ExtraButton onPress={handleBackButtonPress} hitSlop={Theme.hitSlop}>
          <ButtonImage source={leftChevron} resizeMode="contain" />
        </ExtraButton>
      ) : null}
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  background: ${Theme.colors.primary};
  height: 60px;
  padding: 0px 24px;
  flex-direction: row;
  align-items: center;
`;

const BackButton = styled.TouchableOpacity`
  width: 12.5px;
  height: 20px;
`;

const ButtonImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const ExtraButton = styled.TouchableOpacity`
  width: 12.5px;
  height: 20px;
`;

const Spacer = styled.View`
  flex: 1;
`;
