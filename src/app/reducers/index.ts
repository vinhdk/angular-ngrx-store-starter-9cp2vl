import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromSum from './sum.reducer';

export interface AppState {
  [fromSum.sumFeatureKey]: fromSum.SumState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromSum.sumFeatureKey]: fromSum.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
