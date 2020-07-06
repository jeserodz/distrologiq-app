import React from 'react';
import styled from 'styled-components/native';
import {Header} from '../../components/Header';
import {SafeAreaView} from '../../components/StyledSafeAreaView';
import {Theme} from '../../theme';
import {RouteCard} from '../../components/RouteCard';
import {Route} from '../../graphql';

interface RoutesScreenProps {
  routes: Route[];
  onRoutePress: (route: Route) => void;
}

export function RoutesScreen(props: RoutesScreenProps) {
  return (
    <SafeAreaView fillTop fillBottom>
      <Container>
        <Header title="Rutas Asignadas" />
        <Content>
          {props.routes.map(route => (
            <RouteCard
              key={route.id}
              style={{marginBottom: 25}}
              route={route}
              onPress={() => props.onRoutePress(route)}
            />
          ))}
        </Content>
      </Container>
    </SafeAreaView>
  );
}

const Container = styled.View`
  flex: 1;
  background: ${Theme.colors.backgroundDark};
`;

const Content = styled.ScrollView`
  flex: 1;
  padding: 25px;
`;
