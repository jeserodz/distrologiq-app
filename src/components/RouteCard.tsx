import React from 'react';
import styled from 'styled-components/native';
import {Text} from './Text';
import {Theme} from '../theme';
import {ProgressBadge} from './ProgressBadge';
import leftChevron from '../images/left-chevron.png';
import {displayDistance, displayDuration} from '@distrologiq/common';
import {StatusBadge, Status} from './StatusBadge';
import {Route} from '../graphql';

export interface RouteCardProps {
  style?: object;
  route: Route;
  onPress: (route?: Route) => void;
}

export function RouteCard(props: RouteCardProps) {
  const {style = {}} = props;

  function getCompletion(route: Route) {
    const completedCount = route.stops.filter(stop => stop.completed).length;
    const totalCount = route.stops.length;
    return Math.round((completedCount / totalCount) * 100);
  }

  return (
    <Container style={style}>
      <Content>
        <Row spaceBetween marginBottom={16}>
          <Text font={Text.Fonts.ArvoBold} color={Theme.colors.textPrimary} size={16}>
            {props.route.name}
          </Text>
          {!props.route.completed && props.route.started && (
            <ProgressBadge value={getCompletion(props.route)} />
          )}
          {props.route.completed && <StatusBadge status={Status.Complete} />}
        </Row>
        <Row marginBottom={8}>
          <Text font={Text.Fonts.ArvoBold} marginRight={14}>
            Destinos
          </Text>
          <Text>{props.route.stops.length}</Text>
        </Row>
        <Row marginBottom={8}>
          <Text font={Text.Fonts.ArvoBold} marginRight={14}>
            Ditancia
          </Text>
          <Text>{displayDistance(props.route.distance)}</Text>
        </Row>
        <Row>
          <Text font={Text.Fonts.ArvoBold} marginRight={14}>
            Tiempo Est.
          </Text>
          <Text>{displayDuration(props.route.durationWithLoadTime)}</Text>
        </Row>
      </Content>
      <Button onPress={() => props.onPress(props.route)}>
        <ButtonIcon source={leftChevron} resizeMode="contain" />
      </Button>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #979797;
  flex-direction: row;
  border-radius: 5px;
`;

const Content = styled.View`
  width: 300px;
  padding: 25px;
`;

const Row = styled.View<{marginBottom?: number; spaceBetween?: boolean}>`
  width: 100%;
  flex-direction: row;
  justify-content: ${props => (props.spaceBetween ? 'space-between' : 'flex-start')};
  margin-bottom: ${props => props.marginBottom || 0}px;
`;

const Button = styled.TouchableOpacity`
  flex: 1;
  background: rgba(255, 255, 255, 0.17);
  justify-content: center;
  align-items: center;
`;

const ButtonIcon = styled.Image`
  width: 20px;
  height: 20px;
  transform: rotate(180deg);
`;
