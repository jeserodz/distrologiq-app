export type ApiLoginResponse = {
  access_token: string;
};

export type UserRole = 'Admin' | 'Transporter';

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  isActive: boolean;
  roles: UserRole[];
};

export type Destination = {
  id: number;
  name: string;
  email: string;
  phone: string;
  code: string;
  references: string;
  latitude: number;
  longitude: number;
};

export type Route = {
  id: number;
  name: string;
  destinations: Destination[];
  trip: {
    distance: number;
    duration: number;
    durationWithLoadTime: number;
    geometry: any;
    legs: [];
  };
  waypoints: any;
  transporter: User;
};
