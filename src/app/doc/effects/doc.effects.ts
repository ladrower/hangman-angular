import { Injectable } from '@angular/core';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { DocApiService } from '../services/doc-api.service';
import { DocActions } from '../actions';
import * as fromDoc from '../reducers';
import { of } from 'rxjs';

@Injectable()
export class DocEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromDoc.State>,
    private docApiService: DocApiService,
  ) {}

  checkin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DocActions.checkin),
      mergeMap(({ username }) =>
        this.docApiService.checkin(username).pipe(
          map(({ token }) => DocActions.checkinSuccess({ token })),
          catchError(({status, error}) =>
            of(DocActions.checkinFailure({status, error}))
          )
        )
      )
    )
  );

  guess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DocActions.guessLetter),
      mergeMap(({ token, character }) =>
        this.docApiService.guess(character, token).pipe(
          map((data) => DocActions.guessLetterSuccess(data)),
          catchError(({status, error}) =>
            of(DocActions.guessLetterFailure({status, error}))
          )
        )
      )
    )
  );

  createGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DocActions.createGame),
      mergeMap(({ token }) =>
        this.docApiService.postGame(token).pipe(
          map((data) => DocActions.createGameSuccess(data)),
          catchError(({status, error}) =>
            of(DocActions.createGameFailure({status, error}))
          )
        )
      )
    )
  );

  getGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DocActions.getGame),
      mergeMap(({ token }) =>
        this.docApiService.getGame(token).pipe(
          map((data) => DocActions.getGameSuccess(data)),
          catchError(({status, error}) =>
            of(DocActions.getGameFailure({status, error}))
          )
        )
      )
    )
  );
}
