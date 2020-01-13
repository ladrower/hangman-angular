import { createFeatureSelector, createSelector, createReducer, on } from '@ngrx/store';
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

export interface AppState extends fromRoot.State {
  [authFeatureKey]: AuthState;
}

export function authReducer(state, action) {
  return reducer(state, action);
}

export const selectAuthState = createFeatureSelector<AppState, AuthState>(
  authFeatureKey
);

export const selectLoggedIn = createSelector(
  selectAuthState,
  state => state.token !== null
);

export const selectPending = createSelector(
  selectAuthState,
  state => state.pending
);
