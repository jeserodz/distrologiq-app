import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any,
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any,
};

export type CalculateRouteResponse = {
   __typename?: 'CalculateRouteResponse',
  distance: Scalars['Float'],
  duration: Scalars['Float'],
  durationWithLoadTime: Scalars['Float'],
  geometry: RouteGeometry,
  optimizedRouteStops: Array<RouteStop>,
};


export type Destination = {
   __typename?: 'Destination',
  id: Scalars['ID'],
  name: Scalars['String'],
  email: Scalars['String'],
  phone: Scalars['String'],
  code: Scalars['String'],
  references: Scalars['String'],
  longitude: Scalars['Float'],
  latitude: Scalars['Float'],
  isOwnCompany: Scalars['Boolean'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};


export type Mutation = {
   __typename?: 'Mutation',
  createUser: User,
  login: Token,
  setSettings: Settings,
  createDestination: Destination,
  updateDestination: Destination,
  removeDestination: Scalars['Boolean'],
  createRoute: Route,
  updateRoute: Route,
  removeRoute: Scalars['Boolean'],
  startRouteStop: RouteStop,
  completeRouteStop: RouteStop,
  calculateRoute: CalculateRouteResponse,
};


export type MutationCreateUserArgs = {
  username: Scalars['String'],
  password: Scalars['String'],
  displayName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>
};


export type MutationLoginArgs = {
  password: Scalars['String'],
  username: Scalars['String']
};


export type MutationSetSettingsArgs = {
  name: Scalars['String'],
  avgLoadTime: Scalars['Float'],
  longitude: Scalars['Float'],
  latitude: Scalars['Float']
};


export type MutationCreateDestinationArgs = {
  name: Scalars['String'],
  email: Scalars['String'],
  phone: Scalars['String'],
  code: Scalars['String'],
  references: Scalars['String'],
  longitude: Scalars['Float'],
  latitude: Scalars['Float']
};


export type MutationUpdateDestinationArgs = {
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  code?: Maybe<Scalars['String']>,
  references?: Maybe<Scalars['String']>,
  longitude?: Maybe<Scalars['Float']>,
  latitude?: Maybe<Scalars['Float']>
};


export type MutationRemoveDestinationArgs = {
  id: Scalars['Int']
};


export type MutationCreateRouteArgs = {
  name: Scalars['String'],
  distance: Scalars['Float'],
  duration: Scalars['Float'],
  durationWithLoadTime: Scalars['Float'],
  geometry: Scalars['JSONObject'],
  stops: Array<Scalars['JSONObject']>,
  driver?: Maybe<Scalars['JSONObject']>
};


export type MutationUpdateRouteArgs = {
  id: Scalars['Int'],
  name?: Maybe<Scalars['String']>,
  distance?: Maybe<Scalars['Float']>,
  duration?: Maybe<Scalars['Float']>,
  durationWithLoadTime?: Maybe<Scalars['Float']>,
  geometry?: Maybe<Scalars['JSONObject']>,
  started?: Maybe<Scalars['DateTime']>,
  completed?: Maybe<Scalars['DateTime']>,
  completedDuration?: Maybe<Scalars['Float']>,
  stops?: Maybe<Array<Scalars['JSONObject']>>,
  driver?: Maybe<Scalars['JSONObject']>
};


export type MutationRemoveRouteArgs = {
  id: Scalars['ID']
};


export type MutationStartRouteStopArgs = {
  id: Scalars['ID'],
  startDatetime: Scalars['DateTime']
};


export type MutationCompleteRouteStopArgs = {
  id: Scalars['ID'],
  completionDatetime: Scalars['DateTime']
};


export type MutationCalculateRouteArgs = {
  routeStops: Array<Scalars['JSONObject']>
};

export type Place = {
   __typename?: 'Place',
  id: Scalars['ID'],
  name: Scalars['String'],
  latitude: Scalars['Float'],
  longitude: Scalars['Float'],
};

export type Query = {
   __typename?: 'Query',
  users: Array<User>,
  user: User,
  me: User,
  settings: Settings,
  destinations: Array<Destination>,
  destination: Destination,
  routes: Array<Route>,
  route?: Maybe<Route>,
  assignedRoutes: Array<Route>,
  routeStop: RouteStop,
  searchPlaces: SearchPlacesResponse,
};


export type QueryUserArgs = {
  id: Scalars['Float']
};


export type QueryDestinationArgs = {
  id: Scalars['ID']
};


export type QueryRouteArgs = {
  id?: Maybe<Scalars['ID']>
};


export type QueryRouteStopArgs = {
  id: Scalars['ID']
};


export type QuerySearchPlacesArgs = {
  query: Scalars['String']
};

export type Route = {
   __typename?: 'Route',
  id: Scalars['Int'],
  name: Scalars['String'],
  distance: Scalars['Float'],
  duration: Scalars['Float'],
  durationWithLoadTime: Scalars['Float'],
  geometry: RouteGeometry,
  started?: Maybe<Scalars['DateTime']>,
  completed?: Maybe<Scalars['DateTime']>,
  completedDuration?: Maybe<Scalars['Float']>,
  stops: Array<RouteStop>,
  driver?: Maybe<User>,
};

export type RouteGeometry = {
   __typename?: 'RouteGeometry',
  type: Scalars['String'],
  coordinates: Scalars['String'],
};

export type RouteStop = {
   __typename?: 'RouteStop',
  id?: Maybe<Scalars['Int']>,
  type: RouteStopType,
  destination: Destination,
  route?: Maybe<Route>,
  waypointIndex: Scalars['Int'],
  started?: Maybe<Scalars['DateTime']>,
  completed?: Maybe<Scalars['DateTime']>,
};

export enum RouteStopType {
  Delivery = 'DELIVERY',
  Pickup = 'PICKUP',
  DeliveryPickup = 'DELIVERY_PICKUP',
  Arrival = 'ARRIVAL'
}

export type SearchPlacesResponse = {
   __typename?: 'SearchPlacesResponse',
  places: Array<Place>,
};

export type Settings = {
   __typename?: 'Settings',
  uuid: Scalars['ID'],
  name: Scalars['String'],
  avgLoadTime: Scalars['Float'],
  destination: Destination,
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
};

export type Token = {
   __typename?: 'Token',
  id: Scalars['ID'],
  jwt: Scalars['String'],
  user: User,
  createdAt: Scalars['String'],
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  username: Scalars['String'],
  displayName: Scalars['String'],
  email?: Maybe<Scalars['String']>,
  roles: Scalars['JSONObject'],
  createdAt: Scalars['String'],
};

export type Waypoint = {
   __typename?: 'Waypoint',
  coordinates: Array<Scalars['Float']>,
};

export type LoginMutationVariables = {
  username: Scalars['String'],
  password: Scalars['String']
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'Token' }
    & Pick<Token, 'jwt'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'displayName' | 'email'>
    ) }
  ) }
);

export type GetSessionQueryVariables = {};


export type GetSessionQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);

export type GetAssignedRoutesQueryVariables = {};


export type GetAssignedRoutesQuery = (
  { __typename?: 'Query' }
  & { assignedRoutes: Array<(
    { __typename?: 'Route' }
    & Pick<Route, 'id' | 'name' | 'distance' | 'duration' | 'durationWithLoadTime' | 'started' | 'completed'>
    & { geometry: (
      { __typename?: 'RouteGeometry' }
      & Pick<RouteGeometry, 'type' | 'coordinates'>
    ), stops: Array<(
      { __typename?: 'RouteStop' }
      & Pick<RouteStop, 'id'>
    )>, driver: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'displayName'>
    )> }
  )> }
);

export type GetRouteQueryVariables = {
  id?: Maybe<Scalars['ID']>
};


export type GetRouteQuery = (
  { __typename?: 'Query' }
  & { route: Maybe<(
    { __typename?: 'Route' }
    & Pick<Route, 'id' | 'name' | 'distance' | 'duration' | 'durationWithLoadTime' | 'started' | 'completed' | 'completedDuration'>
    & { stops: Array<(
      { __typename?: 'RouteStop' }
      & Pick<RouteStop, 'id' | 'started' | 'completed' | 'type' | 'waypointIndex'>
      & { destination: (
        { __typename?: 'Destination' }
        & Pick<Destination, 'id' | 'name' | 'latitude' | 'longitude'>
      ) }
    )>, geometry: (
      { __typename?: 'RouteGeometry' }
      & Pick<RouteGeometry, 'type' | 'coordinates'>
    ), driver: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'displayName'>
    )> }
  )> }
);

export type RouteStopFragmentFragment = (
  { __typename?: 'RouteStop' }
  & Pick<RouteStop, 'id' | 'started' | 'completed'>
  & { destination: (
    { __typename?: 'Destination' }
    & Pick<Destination, 'id' | 'name' | 'email' | 'phone' | 'code' | 'references' | 'longitude' | 'latitude'>
  ) }
);

export type GetRouteStopQueryVariables = {
  id: Scalars['ID']
};


export type GetRouteStopQuery = (
  { __typename?: 'Query' }
  & { routeStop: (
    { __typename?: 'RouteStop' }
    & RouteStopFragmentFragment
  ) }
);

export type StartRouteStopMutationVariables = {
  id: Scalars['ID'],
  startDatetime: Scalars['DateTime']
};


export type StartRouteStopMutation = (
  { __typename?: 'Mutation' }
  & { startRouteStop: (
    { __typename?: 'RouteStop' }
    & RouteStopFragmentFragment
  ) }
);

export type CompleteRouteStopMutationVariables = {
  id: Scalars['ID'],
  completionDatetime: Scalars['DateTime']
};


export type CompleteRouteStopMutation = (
  { __typename?: 'Mutation' }
  & { completeRouteStop: (
    { __typename?: 'RouteStop' }
    & RouteStopFragmentFragment
  ) }
);

export const RouteStopFragmentFragmentDoc = gql`
    fragment routeStopFragment on RouteStop {
  id
  started
  completed
  destination {
    id
    name
    email
    phone
    code
    references
    longitude
    latitude
  }
}
    `;
export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    jwt
    user {
      id
      username
      displayName
      email
    }
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const GetSessionDocument = gql`
    query GetSession {
  me {
    id
  }
}
    `;

/**
 * __useGetSessionQuery__
 *
 * To run a query within a React component, call `useGetSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSessionQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSessionQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetSessionQuery, GetSessionQueryVariables>) {
        return ApolloReactHooks.useQuery<GetSessionQuery, GetSessionQueryVariables>(GetSessionDocument, baseOptions);
      }
export function useGetSessionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetSessionQuery, GetSessionQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetSessionQuery, GetSessionQueryVariables>(GetSessionDocument, baseOptions);
        }
export type GetSessionQueryHookResult = ReturnType<typeof useGetSessionQuery>;
export type GetSessionLazyQueryHookResult = ReturnType<typeof useGetSessionLazyQuery>;
export type GetSessionQueryResult = ApolloReactCommon.QueryResult<GetSessionQuery, GetSessionQueryVariables>;
export const GetAssignedRoutesDocument = gql`
    query GetAssignedRoutes {
  assignedRoutes {
    id
    name
    distance
    duration
    durationWithLoadTime
    started
    completed
    geometry {
      type
      coordinates
    }
    stops {
      id
    }
    driver {
      id
      displayName
    }
  }
}
    `;

/**
 * __useGetAssignedRoutesQuery__
 *
 * To run a query within a React component, call `useGetAssignedRoutesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAssignedRoutesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAssignedRoutesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAssignedRoutesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAssignedRoutesQuery, GetAssignedRoutesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAssignedRoutesQuery, GetAssignedRoutesQueryVariables>(GetAssignedRoutesDocument, baseOptions);
      }
export function useGetAssignedRoutesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAssignedRoutesQuery, GetAssignedRoutesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAssignedRoutesQuery, GetAssignedRoutesQueryVariables>(GetAssignedRoutesDocument, baseOptions);
        }
export type GetAssignedRoutesQueryHookResult = ReturnType<typeof useGetAssignedRoutesQuery>;
export type GetAssignedRoutesLazyQueryHookResult = ReturnType<typeof useGetAssignedRoutesLazyQuery>;
export type GetAssignedRoutesQueryResult = ApolloReactCommon.QueryResult<GetAssignedRoutesQuery, GetAssignedRoutesQueryVariables>;
export const GetRouteDocument = gql`
    query GetRoute($id: ID) {
  route(id: $id) {
    id
    name
    distance
    duration
    durationWithLoadTime
    started
    completed
    completedDuration
    stops {
      id
      started
      completed
      type
      waypointIndex
      destination {
        id
        name
        latitude
        longitude
      }
    }
    geometry {
      type
      coordinates
    }
    driver {
      id
      displayName
    }
  }
}
    `;

/**
 * __useGetRouteQuery__
 *
 * To run a query within a React component, call `useGetRouteQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRouteQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRouteQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRouteQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetRouteQuery, GetRouteQueryVariables>) {
        return ApolloReactHooks.useQuery<GetRouteQuery, GetRouteQueryVariables>(GetRouteDocument, baseOptions);
      }
export function useGetRouteLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRouteQuery, GetRouteQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetRouteQuery, GetRouteQueryVariables>(GetRouteDocument, baseOptions);
        }
export type GetRouteQueryHookResult = ReturnType<typeof useGetRouteQuery>;
export type GetRouteLazyQueryHookResult = ReturnType<typeof useGetRouteLazyQuery>;
export type GetRouteQueryResult = ApolloReactCommon.QueryResult<GetRouteQuery, GetRouteQueryVariables>;
export const GetRouteStopDocument = gql`
    query GetRouteStop($id: ID!) {
  routeStop(id: $id) {
    ...routeStopFragment
  }
}
    ${RouteStopFragmentFragmentDoc}`;

/**
 * __useGetRouteStopQuery__
 *
 * To run a query within a React component, call `useGetRouteStopQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRouteStopQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRouteStopQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRouteStopQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetRouteStopQuery, GetRouteStopQueryVariables>) {
        return ApolloReactHooks.useQuery<GetRouteStopQuery, GetRouteStopQueryVariables>(GetRouteStopDocument, baseOptions);
      }
export function useGetRouteStopLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRouteStopQuery, GetRouteStopQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetRouteStopQuery, GetRouteStopQueryVariables>(GetRouteStopDocument, baseOptions);
        }
export type GetRouteStopQueryHookResult = ReturnType<typeof useGetRouteStopQuery>;
export type GetRouteStopLazyQueryHookResult = ReturnType<typeof useGetRouteStopLazyQuery>;
export type GetRouteStopQueryResult = ApolloReactCommon.QueryResult<GetRouteStopQuery, GetRouteStopQueryVariables>;
export const StartRouteStopDocument = gql`
    mutation StartRouteStop($id: ID!, $startDatetime: DateTime!) {
  startRouteStop(id: $id, startDatetime: $startDatetime) {
    ...routeStopFragment
  }
}
    ${RouteStopFragmentFragmentDoc}`;
export type StartRouteStopMutationFn = ApolloReactCommon.MutationFunction<StartRouteStopMutation, StartRouteStopMutationVariables>;

/**
 * __useStartRouteStopMutation__
 *
 * To run a mutation, you first call `useStartRouteStopMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartRouteStopMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startRouteStopMutation, { data, loading, error }] = useStartRouteStopMutation({
 *   variables: {
 *      id: // value for 'id'
 *      startDatetime: // value for 'startDatetime'
 *   },
 * });
 */
export function useStartRouteStopMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<StartRouteStopMutation, StartRouteStopMutationVariables>) {
        return ApolloReactHooks.useMutation<StartRouteStopMutation, StartRouteStopMutationVariables>(StartRouteStopDocument, baseOptions);
      }
export type StartRouteStopMutationHookResult = ReturnType<typeof useStartRouteStopMutation>;
export type StartRouteStopMutationResult = ApolloReactCommon.MutationResult<StartRouteStopMutation>;
export type StartRouteStopMutationOptions = ApolloReactCommon.BaseMutationOptions<StartRouteStopMutation, StartRouteStopMutationVariables>;
export const CompleteRouteStopDocument = gql`
    mutation CompleteRouteStop($id: ID!, $completionDatetime: DateTime!) {
  completeRouteStop(id: $id, completionDatetime: $completionDatetime) {
    ...routeStopFragment
  }
}
    ${RouteStopFragmentFragmentDoc}`;
export type CompleteRouteStopMutationFn = ApolloReactCommon.MutationFunction<CompleteRouteStopMutation, CompleteRouteStopMutationVariables>;

/**
 * __useCompleteRouteStopMutation__
 *
 * To run a mutation, you first call `useCompleteRouteStopMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteRouteStopMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeRouteStopMutation, { data, loading, error }] = useCompleteRouteStopMutation({
 *   variables: {
 *      id: // value for 'id'
 *      completionDatetime: // value for 'completionDatetime'
 *   },
 * });
 */
export function useCompleteRouteStopMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CompleteRouteStopMutation, CompleteRouteStopMutationVariables>) {
        return ApolloReactHooks.useMutation<CompleteRouteStopMutation, CompleteRouteStopMutationVariables>(CompleteRouteStopDocument, baseOptions);
      }
export type CompleteRouteStopMutationHookResult = ReturnType<typeof useCompleteRouteStopMutation>;
export type CompleteRouteStopMutationResult = ApolloReactCommon.MutationResult<CompleteRouteStopMutation>;
export type CompleteRouteStopMutationOptions = ApolloReactCommon.BaseMutationOptions<CompleteRouteStopMutation, CompleteRouteStopMutationVariables>;