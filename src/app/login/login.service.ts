import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    return this.http
      .post<{ accessToken: string }>('http://localhost:3000/auth/login', {
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
}
