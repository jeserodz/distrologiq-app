import React from 'react';
import styled from 'styled-components/native';
import {Theme} from '../theme';
import {Text} from './Text';

export enum Status {
  Pending = 'Pendiente',
  InProgress = 'En Curso',
  Complete = 'Completado',
}

export interface StatusBadgeProps {
  style?: object;
  status: Status;
}

export function StatusBadge(props: StatusBadgeProps) {
  const {style = {}, status} = props;
  return (
    <Container style={style} status={status}>
      <Text font={Text.Fonts.ArvoBold} size={8}>
        {status}
      </Text>
    </Container>
  );
}

StatusBadge.Status = Status;

const Container = styled.View<{status: Status}>`
  border-radius: 10px;
  padding: 3px 10px;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  background: ${({status}) =>
    status === Status.Pending
      ? Theme.colors.info
      : status === Status.InProgress
      ? Theme.colors.primary
      : Theme.colors.success};
`;
