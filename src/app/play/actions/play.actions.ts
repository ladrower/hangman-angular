import { createAction, props } from '@ngrx/store';
import { Game } from '../../core/models/game';

export const cleanup = createAction('[Play] Cleanup');

export const loadGame = createAction('[Play] Load game', props<{ override: boolean }>());
export const loadGameSuccess = createAction('[Play] Load game success', props<Game>());
export const loadGameFailure = createAction('[Play] Load game failure', props<{ error: string }>());

export const guessLetter = createAction('[Play] Guess letter', props<{ character: string }>());
export const guessLetterSuccess = createAction('[Play] Guess letter success', props<Game>());
export const guessLetterFailure = createAction('[Play] Guess letter failure', props<{ error: string }>());

