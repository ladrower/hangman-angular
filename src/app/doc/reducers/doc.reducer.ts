import { createFeatureSelector, createSelector, createReducer, on } from '@ngrx/store';
import { DocActions } from '../actions';
import * as fromRoot from '../../reducers';

export interface EndpointState {
  pending: boolean;
  response: string | null;
  errorResponse: string | null;
}

export interface DocState {
  checkin: EndpointState;
  createGame: EndpointState;
  getGame: EndpointState;
  guessLetter: EndpointState;
}

export const makeEndpoint = (pending = false, response = null, errorResponse = null): EndpointState => ({
  pending,
  response,
  errorResponse,
});

const initialState: DocState = {
  checkin: makeEndpoint(),
  createGame: makeEndpoint(),
  getGame: makeEndpoint(),
  guessLetter: makeEndpoint(),
};

const reducer = createReducer(
  initialState,
  on(DocActions.checkin, (state) =>
    ({ ...state, checkin: makeEndpoint(true) })),
  on(DocActions.checkinSuccess, (state, data) =>
    ({ ...state, checkin: makeEndpoint(false, JSON.stringify(data) ) })),
  on(DocActions.checkinFailure, (state) =>
    ({ ...state, checkin: makeEndpoint(false ) })),

  on(DocActions.getGame, (state) =>
    ({ ...state, getGame: makeEndpoint(true) })),
  on(DocActions.getGameSuccess, (state, data) =>
    ({ ...state, getGame: makeEndpoint(false, JSON.stringify(data) ) })),
  on(DocActions.getGameFailure, (state, data) =>
    ({ ...state, getGame: makeEndpoint(false, null, JSON.stringify(data) ) })),

  on(DocActions.createGame, (state) =>
    ({ ...state, createGame: makeEndpoint(true) })),
  on(DocActions.createGameSuccess, (state, data) =>
    ({ ...state, createGame: makeEndpoint(false, JSON.stringify(data) ) })),
  on(DocActions.createGameFailure, (state, data) =>
    ({ ...state, createGame: makeEndpoint(false, null, JSON.stringify(data) ) })),

  on(DocActions.guessLetter, (state) =>
    ({ ...state, guessLetter: makeEndpoint(true) })),
  on(DocActions.guessLetterSuccess, (state, data) =>
    ({ ...state, guessLetter: makeEndpoint(false, JSON.stringify(data) ) })),
  on(DocActions.guessLetterFailure, (state, data) =>
    ({ ...state, guessLetter: makeEndpoint(false, null, JSON.stringify(data) ) })),
);

export const docFeatureKey = 'doc';

export interface State extends fromRoot.State {
  [docFeatureKey]: DocState;
}

export function docReducer(state, action) {
  return reducer(state, action);
}

export const selectDocState = createFeatureSelector<State, DocState>(
  docFeatureKey
);

export const selectCheckinState = createSelector(
  selectDocState,
  ({checkin}, props: {key: keyof EndpointState}) => checkin[props.key]
);

export const selectGetGameState = createSelector(
  selectDocState,
  ({getGame}, props: {key: keyof EndpointState}) => getGame[props.key]
);

export const selectCreateGameState = createSelector(
  selectDocState,
  ({createGame}, props: {key: keyof EndpointState}) => createGame[props.key]
);

export const selectGuessLetterState = createSelector(
  selectDocState,
  ({guessLetter}, props: {key: keyof EndpointState}) => guessLetter[props.key]
);
