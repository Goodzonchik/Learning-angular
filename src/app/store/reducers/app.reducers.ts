import { createReducer, on } from '@ngrx/store';
import { todoAny } from '@utils';
import { increment, decrement, reset } from '../actions/app.actions';

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export function counterReducer(state: todoAny, action: todoAny) {
  return _counterReducer(state, action);
}
