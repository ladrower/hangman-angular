import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { AuthActions } from '../actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
  ) {}

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.checkout),
      tap(() => {
        this.router.navigate(['/auth']);
        // this.authService.logout();
      })
    ),
    { dispatch: false }
  );
}
