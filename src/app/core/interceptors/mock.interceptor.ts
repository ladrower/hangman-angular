import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Observable, of, throwError, timer } from 'rxjs';
import {delay, switchMap, tap} from 'rxjs/operators';
import { data as wordsList } from '../../mock/data/words.json';
import { GameService } from '../../mock/game/GameService';
import { HTTPCode } from '../../mock/HTTPCode';

@Injectable()
export class MockInterceptor implements HttpInterceptor {
  private gameService = new GameService(window.localStorage, {
    maxAttempts: 6,
    maxRoundScore: 100,
    words: wordsList
  });

  private static response<T>(code: HTTPCode, data: T) {
    if (code === HTTPCode.OK) {
      return of(new HttpResponse({ status: code, body: data }))
        .pipe(
          delay(200 + Math.random() * 300)
        );
    }
    return timer(100 + Math.random() * 200)
      .pipe(
        switchMap(() => throwError(new HttpErrorResponse({error: data, status: code})))
      );
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const {method, body, url, headers} = req;
    const token = headers &&
      headers.get('Authorization') &&
      headers.get('Authorization').split('Bearer ')[1]
    switch (method) {
      case 'POST': {
        switch (url) {
          case '/checkin': {
            const { code, data } = this.gameService.checkin(body.username);
            return MockInterceptor.response(code, data);
          }
          case '/guess': {
            const { code, data } = this.gameService.guess(body.character, token);
            return MockInterceptor.response(code, data);
          }
          case '/game': {
            const { code, data } = this.gameService.postGame(token);
            return MockInterceptor.response(code, data);
          }
        }
        break;
      }
      case 'GET': {
        switch (url) {
          case '/game': {
            const { code, data } = this.gameService.getGame(token);
            return MockInterceptor.response(code, data);
          }
        }
        break;
      }
    }

    return next.handle(req).pipe(
      tap(evt => {
        if (evt instanceof HttpResponse) {
          console.log('---> headers:', evt.headers);
        }
      })
    );

  }
}
