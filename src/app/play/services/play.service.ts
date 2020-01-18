import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../../core/models/game';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PlayService {
  constructor(private http: HttpClient) {}

  guess(character: string) {
    return this.http.post<Game>('/guess', { character } );
  }

  loadGame(override: boolean) {
    return override ?
      this.http.post<Game>('/game', undefined) :
      this.http.get<Game>('/game').pipe(
        catchError(() =>
          this.http.post<Game>('/game', undefined)
        )
      );
  }

}
