import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromPlay from '../../reducers';
import { PlayActions } from '../../actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Game } from '../../../core/models/game';
import { data as chars } from '../../../mock/data/characters.json';

@Component({
  selector: 'app-play-container',
  templateUrl: './play-container.component.html',
  styleUrls: ['./play-container.component.css']
})
export class PlayContainerComponent implements OnInit {
  chars: string[] = chars;
  busy$: Observable<boolean>;
  error$: Observable<string>;
  game$: Observable<Game | null>;
  charsUsed$: Observable<Set<string>>;
  puzzle$: Observable<string>;

  constructor(
    private store: Store<fromPlay.State>
  ) { }

  ngOnInit() {
    this.busy$ = this.store.pipe(select(fromPlay.selectBusy));
    this.error$ = this.store.pipe(select(fromPlay.selectError));
    this.game$ = this.store.pipe(select(fromPlay.selectGame));
    this.charsUsed$ = this.store.pipe(select(fromPlay.selectCharsUsed));
    this.puzzle$ = this.store.pipe(select(fromPlay.selectPuzzleString, {
      unknown: '_',
      separator: ' '
    }));

    this.loadGame();
  }

  loadGame(override = false) {
    this.store.dispatch(PlayActions.loadGame({ override }));
  }

  makeGuess(character: string) {
    this.store.dispatch(PlayActions.guessLetter({ character }));
  }

}
