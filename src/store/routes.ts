import {Action, action, Thunk, thunk} from 'easy-peasy';
import {Route, Destination} from '../types';
import {Injections} from './_injections';
import {StoreModel} from './_store';

export interface RoutesModel {
  loading: boolean;
  assignedRoutes: Route[];
  activeRoute: Route | null;
  activeDestination: Destination | null;
  setLoading: Action<RoutesModel, boolean>;
  setAssignedRoutes: Action<RoutesModel, Route[]>;
  setActiveRoute: Action<RoutesModel, Route | null>;
  setActiveDestination: Action<RoutesModel, Destination | null>;
  fetchAssignedRoutes: Thunk<RoutesModel, void, Injections, StoreModel>;
}

export const routesModel: RoutesModel = {
  loading: false,
  assignedRoutes: [],
  activeRoute: null,
  activeDestination: null,

  setLoading: action((state, payload) => {
    state.loading = payload;
  }),

  setAssignedRoutes: action((state, payload) => {
    state.assignedRoutes = payload;
  }),

  setActiveRoute: action((state, payload) => {
    state.activeRoute = payload;
  }),

  setActiveDestination: action((state, payload) => {
    state.activeDestination = payload;
  }),

  fetchAssignedRoutes: thunk(async (actions, _, {injections, getStoreState}) => {
    try {
      const {ApiService} = injections;
      const {user} = getStoreState().auth;
      if (!user) throw Error('Usuario no disponible. Inicie sesión');
      actions.setLoading(true);
      const routes = await ApiService.Routes.fetchAssigned(user.id);
      actions.setAssignedRoutes(routes);
    } finally {
      actions.setLoading(false);
    }
  }),
};
