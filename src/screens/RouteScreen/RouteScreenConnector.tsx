import React from 'react';
import {RouteScreen} from './RouteScreen';
import {NavigationInjectedProps} from 'react-navigation';
import {useNavigationParam} from 'react-navigation-hooks';
import {useGetRouteQuery, RouteStop, Route} from '../../graphql';

export function RouteScreenConnector(props: NavigationInjectedProps) {
  const routeId = useNavigationParam('routeId');
  const {data} = useGetRouteQuery({variables: {id: routeId}, fetchPolicy: 'no-cache'});

  function handleRouteStopPress(routeStop: RouteStop) {
    props.navigation.navigate('Destination', {routeStopId: routeStop.id});
  }

  return (
    <RouteScreen
      route={data ? (data.route as Route) : undefined}
      onRouteStopPress={handleRouteStopPress}
    />
  );
}
