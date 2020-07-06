declare module '*.png' {
  const value: any;
  export = value;
}

declare module 'react-native-google-maps-directions' {
  export default function getDirections(options: MapsDirectionsOptions): void;

  export interface MapsDirectionsParamTravelMode {
    key: 'travelmode';
    value: 'driving' | 'walking' | 'bicycling' | 'transit';
  }

  export interface MapsDirectionsParamDirAction {
    key: 'dir_action';
    value: 'navigate'; // this instantly initializes navigation using the given travel mode
  }

  export interface MapsDirectionsCoordinate {
    latitude: number;
    longitude: number;
  }

  export interface MapsDirectionsOptions {
    source?: MapsDirectionsCoordinate;
    destination?: MapsDirectionsCoordinate;
    params?: Array<MapsDirectionsParamTravelMode | MapsDirectionsParamDirAction>;
    waypoints: MapsDirectionsCoordinate[];
  }
}
