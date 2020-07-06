import React from 'react';
import styled from 'styled-components/native';
import MapboxGL, {RegionPayload} from '@react-native-mapbox-gl/maps';
import {point, Feature, Point} from '@turf/helpers';
import {Config} from '../config';
import pin from '../images/pin.png';

MapboxGL.setAccessToken(Config.MAPBOX_ACCESS_TOKEN);

export interface MapProps {
  center?: number[];
}

export function Map(props: MapProps) {
  const [centerCoordinate, setCenterCoordinate] = React.useState(Config.MAP_CENTER);
  const [zoomLevel, setZoomLevel] = React.useState(Config.MAP_ZOOM);

  function handleRegionDidChange(feature: Feature<Point, RegionPayload>) {
    setCenterCoordinate(feature.geometry.coordinates);
    setZoomLevel(feature.properties.zoomLevel);
  }

  return (
    <Container>
      <MapboxGL.MapView style={{flex: 1}} onRegionDidChange={handleRegionDidChange}>
        <MapboxGL.Camera
          centerCoordinate={props.center || Config.MAP_CENTER}
          zoomLevel={Config.MAP_ZOOM}
          animationMode="flyTo"
        />
        <MapboxGL.ShapeSource id="map_source" shape={point(props.center || Config.MAP_CENTER)}>
          <MapboxGL.SymbolLayer
            id="map_icon"
            style={{
              iconImage: pin,
              iconSize: 0.4,
              iconAnchor: 'bottom',
            }}
          />
        </MapboxGL.ShapeSource>
      </MapboxGL.MapView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;
