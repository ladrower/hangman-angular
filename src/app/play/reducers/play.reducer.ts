import { createFeatureSelector, createSelector, createReducer, on } from '@ngrx/store';
import { PlayActions } from '../actions';
import * as fromRoot from '../../reducers';
import { Game } from '../../core/models/game';

export interface PlayState {
  busy: boolean;
  game: Game | null;
  error: string;
}

const initialState: PlayState = {
  busy: false,
  game: null,
  error: ''
};

const reducer = createReducer(
  initialState,
  on(PlayActions.loadGame, (state) =>
    ({ ...state, busy: true, error: '' })),
  on(PlayActions.loadGameSuccess, (state, data) =>
    ({ ...state, busy: false, game: data })),
  on(PlayActions.loadGameFailure, (state, data) =>
    ({ ...state, busy: false, error: data.error })),

  on(PlayActions.guessLetter, (state) =>
    ({ ...state, busy: true, error: '' })),
  on(PlayActions.guessLetterSuccess, (state, data) =>
    ({ ...state, busy: false, game: data })),
  on(PlayActions.guessLetterFailure, (state, data) =>
    ({ ...state, busy: false, error: data.error })),
);

export const playFeatureKey = 'play';

export interface State extends fromRoot.State {
  [playFeatureKey]: PlayState;
}

export function playReducer(state, action) {
  return reducer(state, action);
}

export const selectPlayState = createFeatureSelector<State, PlayState>(
  playFeatureKey
);

export const selectBusy = createSelector(
  selectPlayState,
  ({busy}) => busy
);

export const selectError = createSelector(
  selectPlayState,
  ({error}) => error
);

export const selectGame = createSelector(
  selectPlayState,
  ({game}) => game
);
