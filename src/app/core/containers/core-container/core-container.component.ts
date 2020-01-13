import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import * as fromAuth from '../../../auth/reducers';
import { AuthActions } from '../../../auth/actions';

@Component({
  selector: 'app-core-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './core-container.component.html',
  styleUrls: ['./core-container.component.css']
})
export class CoreContainerComponent implements OnInit {
  routeTitle$: Observable<string>;
  loggedIn$: Observable<boolean>;

  constructor(
    private store: Store<fromAuth.AppState>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routeTitle$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      mergeMap(route => route.data),
      map(data => data.title),
    );

    this.loggedIn$ = this.store.pipe(
      select(fromAuth.selectLoggedIn)
    );
  }

  logout() {
    this.store.dispatch(AuthActions.checkout());
  }

}
