import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  setToken(token: string | null) {
    if (token) {
      localStorage.setItem('accessToken', token);
    } else {
      localStorage.removeItem('accessToken');
    }
  }

  login(username: string) {
    return this.http.post<{ token: string }>('/checkin', { username } );
  }

  logout() {
    this.setToken(null);
    return this.http.post('/checkout', null);
  }

}
