import {createFeatureSelector, createSelector, createReducer, on, ActionReducer} from '@ngrx/store';
import { AuthActions } from '../actions';
import * as fromRoot from '../../reducers';

export interface AuthState {
  token: string | null;
  pending: boolean;
}

const initialState: AuthState = {
  token: null,
  pending: false,
};

const reducer = createReducer(
  initialState,
  on(AuthActions.checkin, (state) => ({ ...state, pending: true })),
  on(AuthActions.checkinSuccess, (state, { token }) => ({ ...state, token, pending: false })),
  on(AuthActions.checkinFailure, (state) => ({ ...state, pending: false })),
  on(AuthActions.checkout, () => initialState)
);

export const authFeatureKey = 'auth';

export interface State extends fromRoot.State {
  [authFeatureKey]: AuthState;
}

export function authReducer(state, action) {
  return reducer(state, action);
}

export function authMetaReducer(reduce: ActionReducer<any>): ActionReducer<any> {
  let initialised = false;
  return (state, action) => {
    const nextState = reduce(state, action);

    if (!initialised) {
      initialised = true;
      return {...nextState, token: localStorage.getItem('accessToken') };
    }

    return nextState;
  };
}

export const selectAuthState = createFeatureSelector<State, AuthState>(
  authFeatureKey
);

export const selectToken = createSelector(
  selectAuthState,
  state => state.token
);

export const selectLoggedIn = createSelector(
  selectToken,
  token => token !== null
);

export const selectPending = createSelector(
  selectAuthState,
  state => state.pending
);
