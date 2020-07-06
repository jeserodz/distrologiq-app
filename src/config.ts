const environment = 'development';

interface IConfig {
  language: string;
  API_URL: string;
  GRAPHQL_URL: string;
  MAPBOX_ACCESS_TOKEN: string;
  MAPBOX_STYLE_URL: string;
  MAP_CENTER: Array<number>;
  MAP_ZOOM: number;
}

const variables = {
  development: {
    language: 'en',
    API_URL: 'http://10.0.0.3:4000/api/v1',
    GRAPHQL_URL: 'http://10.0.0.3:4000/graphql',
    MAPBOX_ACCESS_TOKEN:
      'pk.eyJ1IjoiamVzZXJvZHoiLCJhIjoiY2p6ZTZuNXVnMDExdjNmbGRodHFyaTkzbyJ9.gtH1mPHCucKXoI4HB2TC7g',
    MAPBOX_STYLE_URL: 'mapbox://styles/jeserodz/cjze9w6wk038j1dp357bwx8hj',
    MAP_CENTER: [-69.94289358165807, 18.48339627566902],
    MAP_ZOOM: 11,
  },
  staging: {
    language: 'en',
    API_URL: 'https://distrologiq.jese.me/api/v1',
    GRAPHQL_URL: 'http://10.0.0.3:4000/graphql',
    MAPBOX_ACCESS_TOKEN:
      'pk.eyJ1IjoiamVzZXJvZHoiLCJhIjoiY2p6ZTZuNXVnMDExdjNmbGRodHFyaTkzbyJ9.gtH1mPHCucKXoI4HB2TC7g',
    MAPBOX_STYLE_URL: 'mapbox://styles/jeserodz/cjze9w6wk038j1dp357bwx8hj',
    MAP_CENTER: [-69.94289358165807, 18.48339627566902],
    MAP_ZOOM: 11,
  },
  production: {
    language: 'en',
    API_URL: 'https://distrologiq.jese.me/api/v1',
    GRAPHQL_URL: 'http://10.0.0.3:4000/graphql',
    MAPBOX_ACCESS_TOKEN:
      'pk.eyJ1IjoiamVzZXJvZHoiLCJhIjoiY2p6ZTZuNXVnMDExdjNmbGRodHFyaTkzbyJ9.gtH1mPHCucKXoI4HB2TC7g',
    MAPBOX_STYLE_URL: 'mapbox://styles/jeserodz/cjze9w6wk038j1dp357bwx8hj',
    MAP_CENTER: [-69.94289358165807, 18.48339627566902],
    MAP_ZOOM: 11,
  },
};

export const Config: IConfig = variables[environment];
