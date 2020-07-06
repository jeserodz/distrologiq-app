import React from 'react';
import {NavigationInjectedProps} from 'react-navigation';
import {useGetAssignedRoutesQuery, Route} from '../../graphql';
import {RoutesScreen} from '../RoutesScreen';

export function RoutesScreenConnector(props: NavigationInjectedProps) {
  const {data} = useGetAssignedRoutesQuery();

  function handleRoutePress(route: Route) {
    props.navigation.navigate('Route', {routeId: route.id});
  }

  return (
    <RoutesScreen
      routes={data ? (data.assignedRoutes as Route[]) : []}
      onRoutePress={handleRoutePress}
    />
  );
}
