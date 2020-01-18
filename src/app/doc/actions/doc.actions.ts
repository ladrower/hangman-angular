import { createAction, props } from '@ngrx/store';
import { Game } from '../../core/models/game';

export const checkin = createAction('[Doc] Checkin', props<{ username: string }>());
export const checkinSuccess = createAction('[Doc] Checkin success', props<{ token: string }>());
export const checkinFailure = createAction('[Doc] Checkin failure', props<{ status: number, error: string }>());

export const createGame = createAction('[Doc] Create game', props<{ token: string }>());
export const createGameSuccess = createAction('[Doc] Create game success', props<Game>());
export const createGameFailure = createAction('[Doc] Create game failure', props<{ status: number, error: string }>());

export const getGame = createAction('[Doc] Get game', props<{ token: string }>());
export const getGameSuccess = createAction('[Doc] Get game success', props<Game>());
export const getGameFailure = createAction('[Doc] Get game failure', props<{ status: number, error: string }>());

export const guessLetter = createAction('[Doc] Guess letter', props<{ token: string, character: string }>());
export const guessLetterSuccess = createAction('[Doc] Guess letter success', props<Game>());
export const guessLetterFailure = createAction('[Doc] Guess letter failure', props<{ status: number, error: string }>());

