import { createReducer, on, Action } from '@ngrx/store';
import { SumAction, ClearAction } from '../actions';
export interface SumState {
  total: number | undefined;
}

export const initialState: SumState = {
  total: undefined
};

export const sumFeatureKey = 'sum';

export const counterReducer = createReducer(
  initialState,
  on(SumAction, (state, action) => ({ ...state, total: action.a + action.b })),
  on(ClearAction, (state, action) => ({ ...state, total: undefined })),
);

export function reducer(state: SumState | undefined, action: Action) {
  return counterReducer(state, action);
}
