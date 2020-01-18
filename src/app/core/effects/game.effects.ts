import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../auth/actions';
import { PlayActions } from '../../play/actions';

@Injectable()
export class GameEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>
  ) {}

  cleanupOnLogout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.checkout),
      map(() =>
        PlayActions.cleanup()
      )
    )
  );
}
