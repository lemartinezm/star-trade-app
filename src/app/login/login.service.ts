import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http
      .post<{ accessToken: string }>('http://localhost:3000/auth/login', {
        email,
        password,
      })
      .subscribe({
        next: (data) => localStorage.setItem('accessToken', data.accessToken),
        error: (err) => console.error(err),
      });
  }
}
