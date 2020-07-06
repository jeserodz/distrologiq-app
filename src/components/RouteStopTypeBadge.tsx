import React from 'react';
import styled from 'styled-components/native';
import {Theme} from '../theme';
import {Text} from './Text';
import {RouteStopType} from '../graphql';

const labels = {
  [RouteStopType.Delivery]: 'Entrega',
  [RouteStopType.DeliveryPickup]: 'Entrega Y Recogida',
  [RouteStopType.Pickup]: 'Recogida',
  [RouteStopType.Arrival]: 'Llegada',
};

export interface RouteStopTypeBadgeProps {
  style?: object;
  type: RouteStopType;
}

export function RouteStopTypeBadge(props: RouteStopTypeBadgeProps) {
  const {style = {}, type} = props;
  return (
    <Container style={style}>
      <Text font={Text.Fonts.ArvoBold} color="#101010" size={8}>
        {labels[type]}
      </Text>
    </Container>
  );
}

const Container = styled.View`
  border-radius: 10px;
  padding: 3px 10px;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  background: #d9d9d9;
`;
