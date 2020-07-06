import React from 'react';
import {DestinationScreen} from './DestinationScreen';
import {NavigationInjectedProps} from 'react-navigation';
import {Alert} from 'react-native';
import {useNavigationParam} from 'react-navigation-hooks';
import getDirections from 'react-native-google-maps-directions';
import {
  RouteStop,
  useGetRouteStopQuery,
  useStartRouteStopMutation,
  useCompleteRouteStopMutation,
} from '../../graphql';

export function DestinationScreenConnector(props: NavigationInjectedProps) {
  const routeStopId: string = useNavigationParam('routeStopId');
  const [startRouteStop] = useStartRouteStopMutation();
  const [completeRouteStop] = useCompleteRouteStopMutation();
  const {data, refetch} = useGetRouteStopQuery({
    variables: {id: routeStopId},
    fetchPolicy: 'no-cache',
  });

  function handleDirections() {
    if (!data || !data.routeStop || !data.routeStop.destination) {
      return Alert.alert('Destino no disponible para navegar.');
    }

    getDirections({
      destination: {
        latitude: data.routeStop.destination.latitude,
        longitude: data.routeStop.destination.longitude,
      },
      params: [
        {key: 'travelmode', value: 'driving'},
        {key: 'dir_action', value: 'navigate'},
      ],
      waypoints: [],
    });
  }

  async function handleStart() {
    await startRouteStop({variables: {id: routeStopId, startDatetime: new Date()}});
    refetch();
  }

  async function handleComplete() {
    await completeRouteStop({variables: {id: routeStopId, completionDatetime: new Date()}});
    refetch();
  }

  return data ? (
    <DestinationScreen
      routeStop={data.routeStop as RouteStop}
      onDirections={handleDirections}
      onStart={handleStart}
      onComplete={handleComplete}
    />
  ) : null;
}
