import { FOO_BAR } from '../actions/foo';

const defaultState = {};

export function foo(state = defaultState, action) {
  switch (action.type) {
    case FOO_BAR:
      return state;

    default:
      return state;
  }
}
