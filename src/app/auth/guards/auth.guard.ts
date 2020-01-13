import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState, selectLoggedIn } from '../reducers';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(): Observable<boolean> | boolean {
    return this.store.pipe(
      select(selectLoggedIn),
      map(loggedIn => {
        if (!loggedIn) {
          this.router.navigate(['/auth']);
          return false;
        }
        return true;
      })
    );
  }
}
