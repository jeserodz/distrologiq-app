import React from 'react';
import styled from 'styled-components/native';
import {Text} from './Text';
import {Theme} from '../theme';
import {StatusBadge, Status} from './StatusBadge';
import {RouteStopTypeBadge} from './RouteStopTypeBadge';
import leftChevron from '../images/left-chevron.png';
import {Destination, RouteStop} from '../graphql';

export interface DestinationCardProps {
  style?: object;
  destination: Destination;
  completed: boolean;
  stop: RouteStop;
  order: number;
  onPress: () => void;
}

export function DestinationCard(props: DestinationCardProps) {
  const {style = {}} = props;
  return (
    <Container style={style}>
      <Content>
        <Text
          font={Text.Fonts.ArvoBold}
          color={Theme.colors.textPrimary}
          size={16}
          marginBottom={20}>
          Destino {props.order}
        </Text>
        <Text font={Text.Fonts.ArvoBold} marginBottom={20}>
          {props.stop.destination.name}
        </Text>
        <BadgesWrapper>
          <RouteStopTypeBadge style={{marginRight: 10}} type={props.stop.type} />
          <StatusBadge
            status={
              props.stop.completed
                ? Status.Complete
                : props.stop.started
                ? Status.InProgress
                : Status.Pending
            }
          />
        </BadgesWrapper>
      </Content>
      <Button onPress={props.onPress}>
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
  width: 225px;
  padding: 25px;
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

const BadgesWrapper = styled.View`
  flex-direction: row;
`;
