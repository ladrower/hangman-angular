import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/game';

@Injectable()
export class DocApiService {
  constructor(private http: HttpClient) {}

  checkin(username: string) {
    return this.http.post<{ token: string }>('/checkin', { username } );
  }

  guess(character: string, token: string) {
    return this.http.post<Game>('/guess', { character }, { headers: { Authorization: `Bearer ${token}` } } );
  }

  postGame(token: string) {
    return this.http.post<Game>('/game', undefined, { headers: { Authorization: `Bearer ${token}` } } );
  }

  getGame(token: string) {
    return this.http.get<Game>('/game', { headers: { Authorization: `Bearer ${token}` } } );
  }

}
