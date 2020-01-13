import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromAuth from '../reducers';
import { AuthActions } from '../actions';
import { throwError } from 'rxjs';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {
  constructor(private store: Store<fromAuth.State>) {}
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request).pipe(
      catchError((response) => {
        if (response instanceof HttpErrorResponse && response.status === 401) {
          this.store.dispatch(AuthActions.checkout);
        }
        return throwError(response);
      })
    );
  }
}
