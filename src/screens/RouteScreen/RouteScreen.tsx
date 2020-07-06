import React from 'react';
import styled from 'styled-components/native';
import {chain} from 'lodash';
import {SafeAreaView} from '../../components/StyledSafeAreaView';
import {Header} from '../../components/Header';
import {Theme} from '../../theme';
import {InfoChip} from '../../components/InfoChip';
import {DestinationCard} from '../../components/DestinationCard';
import {Route, RouteStop} from '../../graphql';
import {displayDuration} from '../../utils/display-helpers';

interface RouteScreenProps {
  route?: Route;
  onRouteStopPress: (stop: RouteStop) => void;
}

export function RouteScreen(props: RouteScreenProps) {
  return (
    <SafeAreaView fillTop fillBottom>
      <Container>
        <Header title={props.route ? props.route.name : ''} showBackButton />
        {props.route && (
          <Content>
            <InfoChipsContainer>
              <InfoChip
                label="Tiempo Est."
                value={displayDuration(props.route.durationWithLoadTime)}
              />
              <InfoChip
                label="Tiempo Transc."
                value={displayDuration(props.route.completedDuration)}
              />
            </InfoChipsContainer>
            <DestinationsContainer>
              {chain(props.route.stops)
                .sortBy((stop: any) => stop.waypointIndex)
                .sortBy((stop: any) => !!stop.completed)
                .value()
                .map((stop, index) => (
                  <DestinationCard
                    key={stop.destination.id}
                    destination={stop.destination}
                    completed={!!stop.completed}
                    stop={stop}
                    order={stop.waypointIndex + 1}
                    style={{marginBottom: 25}}
                    onPress={() => props.onRouteStopPress(stop)}
                  />
                ))}
            </DestinationsContainer>
          </Content>
        )}
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
  padding: 25px;
`;

const InfoChipsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const ButtonContainer = styled.View`
  margin-bottom: 25px;
`;

const BadgeLayer = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  width: 25%;
  height: 100%;
  justify-content: center;
  align-items: flex-end;
  padding-right: 12.5px;
`;

const DestinationsContainer = styled.ScrollView`
  flex: 1;
`;
