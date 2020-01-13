import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { AuthActions } from '../actions';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService,
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.checkin),
      mergeMap(({ username }) =>
        this.authService.login(username).pipe(
          map(({ token }) => AuthActions.checkinSuccess({ token })),
          catchError(() =>
            of(AuthActions.checkinFailure())
          )
        )
      )
    )
  );

  loginSuccess$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AuthActions.checkinSuccess),
        tap(({ token }) => {
          this.authService.setToken(token);
          this.router.navigate(['/play']);
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.checkout),
      tap(() => {
        this.router.navigate(['/auth']);
        this.authService.logout();
      })
    ),
    { dispatch: false }
  );
}
