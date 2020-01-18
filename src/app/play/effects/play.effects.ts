import { Injectable } from '@angular/core';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { PlayService } from '../services/play.service';
import { PlayActions } from '../actions';
import * as fromPlay from '../reducers';
import { of } from 'rxjs';

@Injectable()
export class PlayEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromPlay.State>,
    private playService: PlayService,
  ) {}

  loadGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayActions.loadGame),
      mergeMap(({ override }) =>
        this.playService.loadGame(override).pipe(
          map((game) => PlayActions.loadGameSuccess(game)),
          catchError(({ error }) =>
            of(PlayActions.loadGameFailure({ error }))
          )
        )
      )
    )
  );

  guess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlayActions.guessLetter),
      mergeMap(({ character }) =>
        this.playService.guess(character).pipe(
          map((data) => PlayActions.guessLetterSuccess(data)),
          catchError(({ error }) =>
            of(PlayActions.guessLetterFailure({ error }))
          )
        )
      )
    )
  );
}
