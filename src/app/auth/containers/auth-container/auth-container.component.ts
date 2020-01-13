import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import { AuthActions } from '../../actions';
import * as fromAuth from '../../reducers';

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: ['./auth-container.component.css']
})
export class AuthContainerComponent implements OnInit {

  authenticating$: Observable<boolean>;

  username: string;

  constructor(
    private store: Store<fromAuth.State>,
  ) { }

  ngOnInit() {
    this.authenticating$ = this.store.pipe(select(fromAuth.selectPending));
  }

  onSubmit() {
    const { username } = this;
    this.store.dispatch(AuthActions.checkin({ username }));
  }

}
