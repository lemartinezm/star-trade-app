import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseUrlApi = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    return this.http
      .post<{ accessToken: string }>(`${this.baseUrlApi}/auth/login`, {
        email,
        password,
      })
      .subscribe({
        next: (data) => {
          localStorage.setItem('accessToken', data.accessToken);
          this.router.navigateByUrl('');
        },
        error: (err) => console.error(err),
      });
  }

  verifyToken(token: string) {
    return this.http.get<{ message: string }>(`${this.baseUrlApi}/auth/token`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
