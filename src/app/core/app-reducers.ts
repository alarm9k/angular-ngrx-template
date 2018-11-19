import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {layoutReducer, LayoutState} from './layout/layout.reducer';
import {storeFreeze} from 'ngrx-store-freeze';

export interface AppState {
  router: RouterReducerState;
  layout: LayoutState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  layout: layoutReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [storeFreeze] : [];
