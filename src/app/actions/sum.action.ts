import { createAction, props } from '@ngrx/store';
export const SumAction = createAction(
  '[Action] Sum A and B',
  props<ISumAction>()
);
export const ClearAction = createAction(
  '[Action] Clear Sum',
);
export interface ISumAction {
  a: number;
  b: number;
}
