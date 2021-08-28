import { AppState } from '../reducers';
import { createSelector } from '@ngrx/store';

export const selectSumState = (state: AppState) => state.sum;
export const getTotal = createSelector(
  selectSumState,
  sum => sum.total
);
