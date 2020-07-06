import {authModel, AuthModel} from './auth';
import {RoutesModel, routesModel} from './routes';

export interface StoreModel {
  auth: AuthModel;
  routes: RoutesModel;
}

export const storeModel: StoreModel = {
  auth: authModel,
  routes: routesModel,
};
