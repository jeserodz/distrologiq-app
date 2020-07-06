import {Action, action, Thunk, thunk} from 'easy-peasy';
import AsyncStorage from '@react-native-community/async-storage';
import {StoreModel} from './_store';
import {Injections} from './_injections';
import {User} from '../types';

export interface AuthModel {
  token: string;
  user: User | null;
  rehydrated: boolean;
  setToken: Action<AuthModel, string>;
  setUser: Action<AuthModel, User | null>;
  setRehydrated: Action<AuthModel, boolean>;
  login: Thunk<AuthModel, {email: string; password: string}, Injections>;
  persist: Thunk<AuthModel, void>;
  rehydrate: Thunk<AuthModel, void>;
}

export const authModel: AuthModel = {
  token: '',
  user: null,
  rehydrated: false,

  setToken: action((state, payload) => {
    state.token = payload;
  }),

  setUser: action((state, payload) => {
    state.user = payload;
  }),

  setRehydrated: action((state, payload) => {
    state.rehydrated = payload;
  }),

  login: thunk(async (actions, payload, {injections}) => {
    const {ApiService} = injections;
    const {access_token} = await ApiService.Auth.login(payload.email, payload.password);
    actions.setToken(access_token);
    const user = await ApiService.Users.fetchCurrentUser();
    actions.setUser(user);
    actions.persist();
  }),

  persist: thunk(async (actions, _, {getState}) => {
    const {rehydrated, ...state} = getState();
    return AsyncStorage.setItem('store/auth', JSON.stringify(state));
  }),

  rehydrate: thunk(async (actions, _) => {
    // const persistedState: AuthModel = null;
    // if (persistedState) {
    //   actions.setToken(persistedState.token);
    //   actions.setUser(persistedState.user);
    //   actions.setRehydrated(true);
    // }
  }),
};
