import React from 'react';
import styled from 'styled-components/native';
import {SafeAreaView} from '../../components/StyledSafeAreaView';
import {Header} from '../../components/Header';
import {Theme} from '../../theme';
import {InfoBlock} from '../../components/InfoBlock';
import {StatusBadge, Status} from '../../components/StatusBadge';
import {Button} from '../../components/Button';
import {Map} from '../../components/Map';
import {RouteStop} from '../../graphql';
import {Alert} from 'react-native';

export interface DestinationScreenProps {
  routeStop: RouteStop;
  onDirections: (routeStop: RouteStop) => void;
  onStart: (routeStop: RouteStop) => void;
  onComplete: (routeStop: RouteStop) => void;
}

export function DestinationScreen(props: DestinationScreenProps) {
  const {routeStop} = props;

  function onStartPress() {
    Alert.alert(
      '¿Iniciar Recorrido?',
      'Esta acción marca como iniciado el recorrido hacia este destino (cliente).',
      [
        {text: 'Cancelar', style: 'cancel'},
        {text: 'Confirmar', style: 'default', onPress: () => props.onStart(props.routeStop)},
      ],
    );
  }

  function onCompletePress() {
    Alert.alert(
      '¿Completar Recorrido?',
      'Esta acción marca como completado el recorrido hacia este destino (cliente).',
      [
        {text: 'Cancelar', style: 'cancel'},
        {text: 'Confirmar', style: 'default', onPress: () => props.onComplete(props.routeStop)},
      ],
    );
  }

  function onDirectionsPress() {
    Alert.alert(
      '¿Mostrar Direcciones?',
      'Esta acción muestra las direcciones GPS hacia este destino (cliente) en Google Maps.',
      [
        {text: 'Cancelar', style: 'cancel'},
        {text: 'Continuar', style: 'default', onPress: () => props.onDirections(props.routeStop)},
      ],
    );
  }

  return (
    <SafeAreaView fillTop fillBottom>
      <Container>
        <Header title={routeStop.destination.name} showBackButton />
        <MapContainer>
          <Map center={[routeStop.destination.longitude, routeStop.destination.latitude]} />
        </MapContainer>
        <DetailsContainer>
          <Column>
            <InfoBlock label="Nombre" value={routeStop.destination.name} />
            <InfoBlock label="Código" value={routeStop.destination.code} />
            <StatusBadge status={routeStop.completed ? Status.Complete : Status.Pending} />
          </Column>
          <Column>
            <InfoBlock label="Teléfono" value={routeStop.destination.phone} />
            <InfoBlock label="Correo" value={routeStop.destination.email} />
          </Column>
        </DetailsContainer>
        <ButtonsContainer>
          <Button label="Direcciones" style={{width: '45%'}} onPress={onDirectionsPress} />
          {!routeStop.completed && (
            <Button
              label={routeStop.started ? 'Completar' : 'Iniciar'}
              style={{width: '45%'}}
              onPress={routeStop.started ? onCompletePress : onStartPress}
            />
          )}
        </ButtonsContainer>
      </Container>
    </SafeAreaView>
  );
}

const Container = styled.View`
  flex: 1;
  background: ${Theme.colors.backgroundDark};
`;

const MapContainer = styled.View`
  width: 100%;
  flex: 1;
  background: white;
`;

const DetailsContainer = styled.View`
  flex-direction: row;
  padding: 25px;
  padding-bottom: 0px;
`;

const Column = styled.View`
  flex: 1;
`;

const ButtonsContainer = styled.View`
  width: 100%;
  padding: 25px;
  flex-direction: row;
  justify-content: space-between;
`;
