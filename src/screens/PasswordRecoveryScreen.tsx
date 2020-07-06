import React from 'react';
import styled from 'styled-components/native';
import { Theme } from '../theme';
import { Header } from '../components/Header';
import { SafeAreaView } from '../components/StyledSafeAreaView';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function PasswordRecoveryScreen() {
  const [email, setEmail] = React.useState('');
  return (
    <SafeAreaView fillTop>
      <Container>
        <Header title="Password Recovery" showBackButton />
        <Content>
          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
          />
          <Spacer />
          <Button
            label="Recover Password"
            onPress={() => {}}
          />
        </Content>
      </Container>
    </SafeAreaView>
  );
}

const Container = styled.View`
  flex: 1;
  background: ${Theme.colors.backgroundDark};
`;

const Content = styled.View`
  flex: 1;
  padding: 45px 24px;
`;

const Spacer = styled.View`
  flex: 1;
`;
