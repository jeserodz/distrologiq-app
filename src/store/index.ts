import {createStore, createTypedHooks} from 'easy-peasy';
import {storeModel, StoreModel} from './_store';
import {injections} from './_injections';

const typedHooks = createTypedHooks<StoreModel>();
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

export const store = createStore(storeModel, {injections});
