import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { first, flatMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromAuth from '../reducers';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private store: Store<fromAuth.State>) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const { headers } = req;
    // keeping auth headers passed directly through config when on Doc page
    const overrideToken = headers &&
      headers.get('Authorization') &&
      headers.get('Authorization').split('Bearer ')[1];

    return this.store.select(fromAuth.selectToken).pipe(
      first(),
      flatMap(token => {
        const authReq = !!token ? req.clone({
          setHeaders: { Authorization: 'Bearer ' + (overrideToken || token) },
        }) : req;
        return next.handle(authReq);
      }),
    );
  }
}
