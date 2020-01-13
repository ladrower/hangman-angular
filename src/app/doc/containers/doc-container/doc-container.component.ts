import { Component, OnDestroy, OnInit} from '@angular/core';
import { Validators } from '@angular/forms';
import { MemoizedSelectorWithProps, select, Store } from '@ngrx/store';
import { DocForm, DocFormBuilder } from '../../services/doc-form.builder';
import * as fromDoc from '../../reducers';
import {Observable, Subscription} from 'rxjs';
import { EndpointState } from '../../reducers';
import { DocActions } from '../../actions';

@Component({
  selector: 'app-doc-container',
  templateUrl: './doc-container.component.html',
  styleUrls: ['./doc-container.component.css']
})
export class DocContainerComponent implements OnInit, OnDestroy {
  docCollection: {
    [id in keyof fromDoc.DocState]: {
      method: string,
      caption: string,
      doc: DocForm,
      pending$: Observable<boolean>;
      response$: Observable<string | null>;
      errorResponse$: Observable<string | null>
    }
  };
  docKeys: Array<keyof fromDoc.DocState>;

  private loginSubscription: Subscription;

  constructor(
    private store: Store<fromDoc.State>,
    private formBuilder: DocFormBuilder
  ) {
    this.docCollection = {
      checkin: {
        ...this.createPipes(fromDoc.selectCheckinState),
        doc: this.formBuilder.createDocForm([
          { name: 'username', label: 'User Name', validators: [Validators.required] }
        ]),
        method: 'POST',
        caption: 'Register with a username to get a token'
      },
      guessLetter: {
        ...this.createPipes(fromDoc.selectGuessLetterState),
        doc: this.formBuilder.createDocForm([
          { name: 'character', label: 'Character', validators: [Validators.required, Validators.maxLength(1)] },
          { name: 'token', label: 'Token', validators: [Validators.required] }
        ]),
        method: 'POST',
        caption: 'Make a guess by posting a single character'
      },
      createGame: {
        ...this.createPipes(fromDoc.selectCreateGameState),
        doc: this.formBuilder.createDocForm([
          { name: 'token', label: 'Token', validators: [Validators.required] }
        ]),
        method: 'POST',
        caption: 'Create a new game for the registered user'
      },
      getGame: {
        ...this.createPipes(fromDoc.selectGetGameState),
        doc: this.formBuilder.createDocForm([
          { name: 'token', label: 'Token', validators: [Validators.required] }
        ]),
        method: 'GET',
        caption: 'Get the latest game for the registered user'
      }
    };
    this.docKeys = Object.keys(this.docCollection) as Array<keyof fromDoc.DocState>;
  }

  ngOnInit() {
    this.loginSubscription = this.docCollection.checkin.response$.subscribe((response) => {
      if (response) {
        try {
          const {token} = JSON.parse(response);
          if (token) {
            ['guessLetter', 'createGame', 'getGame'].map((docKey) =>
              this.docCollection[docKey].doc.form.patchValue({token})
            );
          }
        } catch (e) {
          // pokemon
        }
      }
    });
  }

  ngOnDestroy() {
    this.loginSubscription.unsubscribe();
  }

  executeEndpoint(docKey: keyof fromDoc.DocState) {
    const { value } = this.docCollection[docKey].doc.form;
    this.store.dispatch(DocActions[docKey](value));
  }

  private createPipes(selector: MemoizedSelectorWithProps<fromDoc.State, { key: keyof EndpointState}, any>) {
    return {
      pending$: this.store.pipe(select(selector, {key: 'pending'})),
      response$: this.store.pipe(select(selector, {key: 'response'})),
      errorResponse$: this.store.pipe(select(selector, {key: 'errorResponse'})),
    };
  }

}
